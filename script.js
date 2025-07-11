document.addEventListener("DOMContentLoaded", function () {
  const scrollWrapper = document.getElementById("scrollWrapper");
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Scroll olayı
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollWrapper.style.display = "flex";
    } else {
      scrollWrapper.style.display = "none";
    }
  });

  // Yukarı çık
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
