"use strict";

// Project pages are static documents; all controls run locally in the browser.
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
}
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("open", !expanded);
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("click", event => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 821px)").addEventListener("change", event => {
  if (event.matches) closeMenu();
});

const lightbox = document.querySelector("#gallery-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxPosition = document.querySelector("#lightbox-position");
const closeButton = lightbox.querySelector(".lightbox-close");
const galleryLinks = [...document.querySelectorAll(".gallery-open")];
let activeIndex = 0;
let openingLink = null;

function showImage(index) {
  activeIndex = (index + galleryLinks.length) % galleryLinks.length;
  const link = galleryLinks[activeIndex];
  lightboxImage.src = link.href;
  lightboxImage.alt = link.querySelector("img").alt;
  lightboxCaption.textContent = link.closest("figure").querySelector("h3").textContent;
  lightboxPosition.textContent = `${activeIndex + 1} / ${galleryLinks.length}`;
}
galleryLinks.forEach((link, index) => link.addEventListener("click", event => {
  // Without dialog support, the normal link opens the full-size WEBP directly.
  if (typeof lightbox.showModal !== "function") return;
  event.preventDefault();
  openingLink = link;
  showImage(index);
  lightbox.showModal();
  document.body.style.overflow = "hidden";
  closeButton.focus({ preventScroll: true });
}));
closeButton.addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lightbox-previous").addEventListener("click", () => showImage(activeIndex - 1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => showImage(activeIndex + 1));
lightbox.addEventListener("click", event => {
  const bounds = lightbox.getBoundingClientRect();
  if (event.target === lightbox && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) lightbox.close();
});
lightbox.addEventListener("close", () => {
  document.body.style.overflow = "";
  if (openingLink) openingLink.focus({ preventScroll: true });
});
document.addEventListener("keydown", event => {
  if (lightbox.open) {
    if (event.key === "ArrowLeft") { event.preventDefault(); showImage(activeIndex + 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); showImage(activeIndex - 1); }
  } else if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
  // Escape within the native modal closes it and restores focus via 'close'.
});

const video = document.querySelector("#project-video");
const sceneButton = document.querySelector(".play-project-scene");
const sceneStatus = document.querySelector(".film-play-status");
video.volume = 0.45;
sceneButton.addEventListener("click", async () => {
  const start = Number(sceneButton.dataset.videoStart);
  try {
    video.currentTime = start;
    await video.play();
    sceneStatus.textContent = document.documentElement.lang === "en" ? "Playing this project's scene in the portfolio film. Use the player to pause." : "يُعرض مشهد المشروع ضمن جولة المحفظة. يمكنك الإيقاف من المشغّل.";
  } catch {
    sceneStatus.textContent = document.documentElement.lang === "en" ? "Use the video's play button to watch the film." : "استخدم زر التشغيل في المشغّل لعرض الفيلم.";
    video.focus({ preventScroll: true });
  }
});
