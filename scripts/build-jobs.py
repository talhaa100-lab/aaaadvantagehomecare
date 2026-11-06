import json, urllib.request, html, re, os, sys

BASE = "https://aaaadvantagehomecare.com/wp-json/wp/v2"

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.loads(r.read().decode("utf8")), r.headers

jobs, page = [], 1
while True:
    data, h = get(f"{BASE}/job-listings?per_page=100&page={page}&_fields=id,date,slug,link,title,content,meta,job-categories,job-types,featured_media")
    jobs += data
    total_pages = int(h.get("X-WP-TotalPages", 1))
    print("page", page, "of", total_pages, "total", h.get("X-WP-Total"))
    if page >= total_pages: break
    page += 1

cats = {c["id"]: html.unescape(c["name"]) for c in get(f"{BASE}/job-categories?per_page=100")[0]}
types = {t["id"]: html.unescape(t["name"]) for t in get(f"{BASE}/job-types?per_page=100")[0]}
print(cats, types)

media = {}
for j in jobs:
    m = j.get("featured_media")
    if m and m not in media:
        try:
            d, _ = get(f"{BASE}/media/{m}?_fields=id,source_url")
            media[m] = d["source_url"]
        except Exception as e:
            media[m] = None
print("media", media)

out = []
for j in jobs:
    out.append({
        "slug": j["slug"],
        "title": html.unescape(j["title"]["rendered"]),
        "location": j["meta"].get("_job_location", ""),
        "company": j["meta"].get("_company_name", ""),
        "date": j["date"],
        "type": ", ".join(types.get(t, "") for t in j["job-types"]),
        "category": ", ".join(cats.get(c, "") for c in j["job-categories"]),
        "apply": j["meta"].get("_application", ""),
        "featured": bool(j["meta"].get("_featured")),
        "html": j["content"]["rendered"],
    })

os.makedirs("app/lib", exist_ok=True)
with open("app/lib/jobs.json", "w", encoding="utf8") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print(len(out), "jobs written")
from collections import Counter
print(Counter(o["type"] for o in out)); print(Counter(o["category"] for o in out))
print(Counter(o["apply"] for o in out))
