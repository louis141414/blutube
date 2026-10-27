// List of videos shown on Blutube.
// Replace the src values with real video URLs from Cloudflare R2, Backblaze B2, Bunny Stream, etc.

window.BLUTUBE_VIDEOS = [
  {
    id: "demo",
    title: "Demo Video",
    description: "Example video using a public sample file. Replace this with your own.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://picsum.photos/seed/blutube1/640/360",
    duration: "3:24"
  },
  {
    id: "sample",
    title: "Sample Clip",
    description: "Another public domain sample. Point this to your own file.",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://picsum.photos/seed/blutube2/640/360",
    duration: "1:45"
  },
  {
    id: "placeholder",
    title: "Add your own videos",
    description: "Edit videos.js and the cards on index.html to add real content.",
    src: "",
    thumbnail: "https://picsum.photos/seed/blutube3/640/360",
    duration: "0:30"
  }
];
