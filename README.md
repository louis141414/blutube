# Blutube

Static YouTube-style video site powered by a **JSON file**. Runs on GitHub Pages.

## Live

https://louis141414.github.io/blutube/

## Enable Pages

**Settings → Pages → Deploy from a branch → `main` / root**

## How data works

- Source of truth: `data/videos.json`
- Homepage, watch page, and search all load from that JSON
- **Admin** (`admin.html`):
  - Add / edit / delete videos
  - Saves changes in the browser (localStorage) for testing
  - **Export JSON** downloads an updated `videos.json`
  - Replace `data/videos.json` in the repo and commit to publish
  - **Reset to JSON file** discards local test edits

## Test videos

The default JSON uses public sample MP4s from Google’s test bucket (Big Buck Bunny, Sintel, etc.).

## Pages

| File | Purpose |
|------|--------|
| `index.html` | Home grid, search, category chips |
| `watch.html` | Player + related videos |
| `admin.html` | Manage videos + export JSON |
| `data/videos.json` | All video metadata |
| `js/store.js` | Load / save / export helpers |
| `js/icons.js` | SVG icons |

## Logo

Blue–purple gradient mark (not a YouTube clone).

## Limits

Pure static hosting: no real server uploads. Put video files on any public HTTPS host (R2, B2, Bunny, etc.) and paste the URL in Admin.
