
// Carousel
const carouselImages = document.querySelectorAll('.carousel img');
let currentCarousel = 0;

function showCarousel() {
  carouselImages.forEach((img, idx) => {
    img.classList.remove('active');
    if (idx === currentCarousel) img.classList.add('active');
  });
  currentCarousel = (currentCarousel + 1) % carouselImages.length;
}
setInterval(showCarousel, 3000);

// Testimonials
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial() {
  testimonials.forEach((t, idx) => {
    t.classList.remove('active');
    if (idx === currentTestimonial) t.classList.add('active');
  });
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}
setInterval(showTestimonial, 4000);
