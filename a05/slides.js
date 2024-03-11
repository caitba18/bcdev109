var slideIndex = 1;
var autoswitch = null;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(autoswitch);
  console.log("ajsdsd");
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(autoswitch);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n===undefined){n = slideIndex + 1;}
  if (n > slides.length) {slideIndex = 1; }
  if (n < 1) {slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  autoswitch = setTimeout(showSlides, 2000);
  
}
  
