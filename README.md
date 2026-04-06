# leorium.link

URL shortener + QR code generator. Powered by a Cloudflare Worker, auto-deployed from this repo.

## Adding a redirect

Edit `_redirects` and push:

```
/slug    https://leorium.com/full/path/    301
```

The Worker fetches `_redirects` from GitHub (1-min cache).

## QR codes

Any redirect automatically gets a QR code:

```
leorium.link/qr/os0  →  QR image pointing to leorium.link/os0
```

## Current redirects

| Short | Destination |
|-------|------------|
| `/os0` | DuoOS Introduction |
| `/` | leorium.com (fallback) |
