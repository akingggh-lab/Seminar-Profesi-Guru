document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const links = document.querySelectorAll(".nav-links a");
  toggle.addEventListener("click", () => {
    const opened = nav.querySelector(".nav-links").classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.innerHTML = opened ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
  links.forEach(link => link.addEventListener("click", () => {
    nav.querySelector(".nav-links").classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    links.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  }));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
  }
  document.getElementById("year").textContent = new Date().getFullYear();
});