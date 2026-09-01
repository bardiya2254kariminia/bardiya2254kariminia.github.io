
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
});
