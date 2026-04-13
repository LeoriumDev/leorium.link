# leorium.link

URL shortener + QR code generator. Powered by a Cloudflare Worker, auto-deployed from this repo.

## Adding a redirect

Edit `_redirects` and push:

```
/slug    https://leorium.com/full/path/    301
```

Use `301` for permanent links (blog posts, projects, social profiles). Use `302` for temporary links (slides, event pages, meeting links).

The Worker fetches `_redirects` from GitHub (1-min cache).

## QR codes

Any redirect automatically gets a QR code:

```
leorium.link/qr/os0  →  QR image pointing to leorium.link/os0
```

## Current redirects

| Short | Status | Destination |
|-------|--------|------------|
| `/os0` | 301 | DuoOS Introduction |
| `/link` | 301 | leorium.link blog post |
| `/yt` | 301 | YouTube (@leorium) |
| `/youtube` | 301 | YouTube (@leorium) |
| `/mantra` | 302 | MANTRA pitch video (YouTube) |
| `/` | 302 | leorium.com (fallback) |
