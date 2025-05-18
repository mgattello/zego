# Web Crawler

A fast, asynchronous Python crawler that:
- Crawls only within a single domain (no subdomains/external links)
- Uses `aiohttp` and `BeautifulSoup`
- Is fully testable and CLI-friendly

## Setup

```bash
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

## Usage

```bash
python -m crawler "https://example.com"
```

## Testing

```bash
pytest
```
