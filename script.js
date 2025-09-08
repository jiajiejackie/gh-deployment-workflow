// Random Cat GIF using cataas.com 
const img = document.getElementById("cat-gif");
const btn = document.getElementById("new-cat");
const shareBtn = document.getElementById("share");

function loadCat() {
  // Cache busting query param to avoid image caching
  const url = "https://cataas.com/cat/gif?type=square&random=" + Date.now();
  img.src = url;
}

btn.addEventListener("click", loadCat);
shareBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    shareBtn.textContent = "Copied!";
    setTimeout(() => (shareBtn.textContent = "Copy Page URL"), 1200);
  } catch (e) {
    alert("Couldn't copy URL, sorry!");
  }
});

loadCat();
