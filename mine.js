// =====================
// Responsive Navbar
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("header nav ul");

  // Buat tombol hamburger
  const burger = document.createElement("div");
  burger.classList.add("burger");
  burger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  header.insertBefore(burger, header.querySelector(".socials"));

  // Toggle menu
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  // Tutup nav otomatis kalau link diklik
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
    });
  });
});

// =====================
// Music Player Responsive Fix
// =====================
window.addEventListener("resize", () => {
  const player = document.querySelector(".music-player");
  if (!player) return;

  if (window.innerWidth <= 600) {
    player.style.width = "95%";
    player.style.flexDirection = "column";
    player.style.alignItems = "flex-start";
  } else {
    player.style.width = "500px";
    player.style.flexDirection = "row";
    player.style.alignItems = "center";
  }
});

// Panggil sekali biar langsung jalan
window.dispatchEvent(new Event("resize"));
