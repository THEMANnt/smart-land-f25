"use strict";

// All content and interactions are browser-local. No tracking or form requests.
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const navigationLinks = [...navigation.querySelectorAll("a")];

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
}

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("open", !expanded);
});
navigationLinks.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 821px)").addEventListener("change", event => {
  if (event.matches) closeMenu();
});

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach(link => {
        const current = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", current);
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-20% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));
}

const filters = [...document.querySelectorAll(".filter")];
const projectCards = [...document.querySelectorAll(".project-card")];
const filterStatus = document.querySelector("#filter-status");
filters.forEach(button => button.addEventListener("click", () => {
  const selected = button.dataset.filter;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle("active", active);
    filter.setAttribute("aria-pressed", String(active));
  });
  let visible = 0;
  projectCards.forEach(card => {
    const show = selected === "all" || card.dataset.category === selected;
    card.hidden = !show;
    if (show) visible += 1;
  });
  filterStatus.textContent = document.documentElement.lang === "en" ? `Projects shown: ${visible}` : `عدد المشاريع المعروضة: ${visible}`;
}));

// Portfolio stories open dedicated, directly linkable static pages.

const videos = [...document.querySelectorAll("video")];
videos.forEach(video => {
  video.volume = 0.8;
  video.addEventListener("play", () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  });
});

// This reserved example address is illustrative; copying never sends a message.
const copyEmailButton = document.querySelector("[data-copy-email]");
copyEmailButton.addEventListener("click", async () => {
  const address = copyEmailButton.dataset.copyEmail;
  const status = document.querySelector("#copy-status");
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(address);
    status.textContent = document.documentElement.lang === "en" ? "Example email copied. No message was sent." : "نُسخ البريد التوضيحي. لم تُرسل أي رسالة.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector(".contact-email-row .contact-link"));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = document.documentElement.lang === "en" ? "Email selected. Use your device's copy command. No message was sent." : "تم تحديد البريد. استخدم أمر النسخ في جهازك؛ لم تُرسل أي رسالة.";
  }
});
