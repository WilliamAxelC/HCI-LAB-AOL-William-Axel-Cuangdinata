const carouselEventItems = document.querySelectorAll('.upcoming_event');
const carouselEventProgress = document.querySelectorAll('.event_progress_circle');

let currentEventSlideIndex = 0;

carouselEventProgress[currentEventSlideIndex].classList.add('active');
carouselEventItems[currentEventSlideIndex].classList.add('active');


function showNextEventSlide() {
    carouselEventItems[currentEventSlideIndex].classList.remove('active');
    carouselEventProgress[currentEventSlideIndex].classList.remove('active');
  

    currentEventSlideIndex = (currentEventSlideIndex + 1) % carouselEventItems.length;

    carouselEventProgress[currentEventSlideIndex].classList.add('active');
    carouselEventItems[currentEventSlideIndex].classList.add('active');

  }

  function showPrevEventSlide() {
    carouselEventItems[currentEventSlideIndex].classList.remove('active');
    carouselEventProgress[currentEventSlideIndex].classList.remove('active');
  

    currentEventSlideIndex = (currentEventSlideIndex - 1 + carouselEventItems.length) % carouselEventItems.length;

    carouselEventProgress[currentEventSlideIndex].classList.add('active');
    carouselEventItems[currentEventSlideIndex].classList.add('active');

  }