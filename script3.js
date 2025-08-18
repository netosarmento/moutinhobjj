document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#feedbackCarousel");
  const items = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".carousel-control-prev");
  const nextBtn = carousel.querySelector(".carousel-control-next");

  let currentIndex = 0;
  let interval = null;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  }

  function startAutoPlay() {
    interval = setInterval(nextSlide, 5000); // 5 segundos
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  nextBtn.addEventListener("click", () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
  });

  showSlide(currentIndex);
  startAutoPlay();
});
