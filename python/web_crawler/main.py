import argparse
import asyncio
from utils.crawler import Crawler

def main():
    parser = argparse.ArgumentParser(description="Fast asynchronous domain-specific web crawler")
    parser.add_argument("url", help="The base URL to start crawling from")
    args = parser.parse_args()

    print(f"Starting crawl for: {args.url}")

    crawler = Crawler(args.url)
    asyncio.run(crawler.run())

if __name__ == "__main__":
    main()
