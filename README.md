# Blutube

A YouTube-style static video platform that runs on **GitHub Pages**.

## Live site

After enabling Pages:

**https://louis141414.github.io/blutube/**

## Enable GitHub Pages

1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Save

## Features (YouTube-like)

- Top bar with logo, search, and icons
- Mini sidebar (Home, Trending, etc.)
- Filter chips
- Video grid with channel avatars, views, upload date
- Watch page with player + related videos sidebar
- Like / Subscribe / Share style buttons
- Dark theme matching modern YouTube

## Add your own videos

Edit `videos.js` and add objects like:

```js
{
  id: "my-video",
  title: "My video title",
  description: "Description text",
  src: "https://your-cdn.com/video.mp4",
  thumbnail: "https://your-cdn.com/thumb.jpg",
  duration: "4:12",
  channel: "Your Channel",
  views: "12K views",
  uploaded: "3 days ago"
}
```

Host the actual video files on Cloudflare R2, Backblaze B2, or Bunny Stream — not in this repo.
