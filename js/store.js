// JSON-backed store with localStorage overlay for testing
const STORAGE_KEY = "blutube_videos";
const JSON_URL = "data/videos.json";

window.BlutubeStore = {
  async load() {
    // Prefer local edits if present (for testing admin changes)
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {}
    }
    const res = await fetch(JSON_URL + "?t=" + Date.now());
    if (!res.ok) throw new Error("Could not load videos.json");
    return await res.json();
  },

  saveLocal(videos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos, null, 2));
  },

  clearLocal() {
    localStorage.removeItem(STORAGE_KEY);
  },

  downloadJSON(videos) {
    const blob = new Blob([JSON.stringify(videos, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "videos.json";
    a.click();
    URL.revokeObjectURL(url);
  },

  makeId(title) {
    return (
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 40) || "video"
    ) + "-" + Date.now().toString(36);
  }
};
