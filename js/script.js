// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Image slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateSlider() {
  const offset = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateSlider(); });
nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % totalSlides; updateSlider(); });

// Form validation
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  [ 'name', 'email', 'message' ].forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      field.classList.add('form-error');
      valid = false;
    } else {
      field.classList.remove('form-error');
    }
  });
  if (valid) {
    feedback.textContent = 'Thank you! Your message has been sent.';
    form.reset();
  } else {
    feedback.textContent = 'Please fill in all fields.';
  }
});