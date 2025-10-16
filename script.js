function createSlider(slidesId, prevId, nextId) {
  const slides = document.getElementById(slidesId);
  const totalSlides = slides.children.length;
  let index = 0;

  document.getElementById(nextId).addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(${-index * 400}px)`;
  });

  document.getElementById(prevId).addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 400}px)`;
  });
}

createSlider('slides1', 'prev1', 'next1');
createSlider('slides2', 'prev2', 'next2');
createSlider('slides3', 'prev3', 'next3');
createSlider('slides4', 'prev4', 'next4');
createSlider('slides5', 'prev5', 'next5');
