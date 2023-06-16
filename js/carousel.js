const carouselItems = document.querySelectorAll('.carousel_item');

let currentSlideIndex = 0;

// console.log(carouselItems);

carouselItems[currentSlideIndex].classList.add('active');

function showNextSlide() {
    carouselItems[currentSlideIndex].classList.remove('active');

    currentSlideIndex = (currentSlideIndex + 1) % carouselItems.length;

    carouselItems[currentSlideIndex].classList.add('active');
  
  }

setInterval(showNextSlide, 3000);