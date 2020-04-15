let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  console.log('workds')
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const images = document.getElementsByClassName("carousel__images");
  if (n > images.length) {slideIndex = 1}
  if (n < 1) {slideIndex = images.length}

  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
  }
  images[slideIndex-1].style.display = "block";
}
