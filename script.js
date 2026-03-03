const productImages = document.querySelectorAll(".card img");

productImages.forEach(img => {
  const original = img.src; 
  const hoverImg = img.dataset.hover;

  img.addEventListener("mouseenter", () => {
    img.src = hoverImg;
  });

  img.addEventListener("mouseleave", () => {
    img.src = original;
  });
});



document.querySelectorAll(".reel-card").forEach(card => {
    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // reset to beginning
    });
});



document.querySelectorAll(".reel-card").forEach(card => {
    const video = card.querySelector("video");

    // Hover → Play muted
    card.addEventListener("mouseenter", () => {
        video.muted = true;
        video.play();
    });

    // Click → Unmute & play with audio
    card.addEventListener("click", () => {
        video.muted = false;
        video.play();
    });

    // Mouse leave → Pause & reset
    card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});



