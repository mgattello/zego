import pytest
from utils.crawler import Crawler

def test_is_same_domain():
    crawler = Crawler("https://example.com")
    assert crawler.is_same_domain("https://example.com/page")
    assert not crawler.is_same_domain("https://sub.example.com")
    assert not crawler.is_same_domain("https://otherdomain.com")

def test_extract_links():
    html = """
    <html>
        <body>
            <a href="/about">About</a>
            <a href="https://example.com/contact">Contact</a>
            <a href="https://external.com">External</a>
        </body>
    </html>
    """
    crawler = Crawler("https://example.com")
    links = crawler.extract_links(html, "https://example.com")
    assert "https://example.com/about" in links
    assert "https://example.com/contact" in links
    assert "https://external.com" not in links
