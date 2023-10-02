document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const navItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  const addShadow = () => {
    if (window.scrollY >= 300) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  };

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("show");
    });
  });
  window.addEventListener("scroll", addShadow);
});
