<script>
  const track = document.querySelector('.carousel-track');
  const images = Array.from(document.querySelectorAll('.carousel-img'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let currentIndex = 0;
  let direction = 1; // 1 → derecha a izquierda, -1 → izquierda a derecha
  const totalImages = images.length;

  function updateCarousel() {
    const offset = -currentIndex * 600; // ancho de imagen
    track.style.transform = `translateX(${offset}px)`;
  }

  function nextImage() {
    currentIndex += direction;

    if (currentIndex >= totalImages - 1 || currentIndex <= 0) {
      direction *= -1; // cambia sentido al llegar a un extremo
    }

    updateCarousel();
  }

  let autoSlide = setInterval(nextImage, 3000); // cambia cada 3s

  nextBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    if (currentIndex < totalImages - 1) currentIndex++;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    if (currentIndex > 0) currentIndex--;
    updateCarousel();
  });
</script>
