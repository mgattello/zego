import asyncio
from urllib.parse import urlparse, urljoin

import aiohttp
from bs4 import BeautifulSoup
import tldextract


class Crawler:
    def __init__(self, base_url: str, max_concurrency: int = 10):
        self.base_url = base_url
        self.base_netloc = urlparse(base_url).netloc
        self.seen_urls = set()
        self.lock = asyncio.Lock()
        self.sem = asyncio.Semaphore(max_concurrency)

    def is_same_domain(self, url: str) -> bool:
        parsed_url = urlparse(url)
        return parsed_url.netloc == self.base_netloc

    async def fetch(self, session: aiohttp.ClientSession, url: str) -> str:
        try:
            async with self.sem, session.get(url, timeout=10) as resp:
                if resp.status == 200 and 'text/html' in resp.headers.get('Content-Type', ''):
                    return await resp.text()
        except Exception:
            pass
        return ""

    def extract_links(self, html: str, base_url: str) -> set[str]:
        soup = BeautifulSoup(html, 'html.parser')
        links = set()
        for tag in soup.find_all('a', href=True):
            href = tag['href']
            joined = urljoin(base_url, href)
            if self.is_same_domain(joined):
                links.add(joined.split('#')[0])
        return links

    async def crawl_url(self, session: aiohttp.ClientSession, url: str):
        async with self.lock:
            if url in self.seen_urls:
                return
            self.seen_urls.add(url)

        html = await self.fetch(session, url)
        if not html:
            return

        links = self.extract_links(html, url)

        print(f"\n🔗 Page: {url}")
        for link in links:
            print(f"  - {link}")

        tasks = [self.crawl_url(session, link) for link in links]
        await asyncio.gather(*tasks)

    async def run(self):
        async with aiohttp.ClientSession() as session:
            await self.crawl_url(session, self.base_url)
