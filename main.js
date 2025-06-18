document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".background-slider__image");
  let currentIndex = 0;

  function changeBackground() {
    // Убираем активный класс у текущего изображения
    images[currentIndex].classList.remove("active");

    // Переходим к следующему изображению
    currentIndex = (currentIndex + 1) % images.length;

    // Добавляем активный класс новому изображению
    images[currentIndex].classList.add("active");
  }

  // Меняем изображение каждые 5 секунд
  setInterval(changeBackground, 5000);

  images[0].classList.add("active");
});
