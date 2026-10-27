# Blutube

A simple static video platform that runs on **GitHub Pages**.

## Live site

After enabling GitHub Pages it will be available at:

`https://louis141414.github.io/blutube/`

## How to turn on GitHub Pages

1. Go to the repository **Settings → Pages**
2. Under **Source** choose **Deploy from a branch**
3. Select branch `main` and folder `/ (root)`
4. Save

GitHub will publish the site in about a minute.

## Adding your own videos

1. Host the video files somewhere (recommended):
   - Cloudflare R2 (cheap egress)
   - Backblaze B2
   - Bunny Stream
   - Any public HTTPS URL

2. Edit `videos.js` and add entries like:

```js
{
  id: "my-video",
  title: "My cool video",
  description: "Short description",
  src: "https://your-storage.com/path/to/video.mp4",
  thumbnail: "https://your-storage.com/path/to/thumb.jpg",
  duration: "4:12"
}
```

3. Update the cards on `index.html` (or generate them from `videos.js` later).

Do **not** put large video files in this GitHub repository. GitHub Pages is only for the website files.

## Files

- `index.html` – homepage with video grid
- `watch.html` – single video player page
- `style.css` – dark theme styling
- `videos.js` – list of videos

## Limits

This is a static site. There is no upload form, no user accounts, and no live streaming. For a full YouTube-like platform you need a real server (e.g. PeerTube).
