AOS.init({
 duration: 1000,
 once: true
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
 const isOpen = mobileMenu.classList.toggle('max-h-0');
 mobileMenu.classList.toggle('max-h-96');

 const menuIcon = mobileMenuButton.querySelector('svg');
 if (!isOpen) {
  menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
 } else {
  menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
 }
});

const slides = document.getElementById('slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

const updateSlide = () => {
 slides.style.transform = `translateX(-${currentIndex * 100}%)`;
};

nextButton.addEventListener('click', () => {
 currentIndex = (currentIndex + 1) % 3;
 updateSlide();
});

prevButton.addEventListener('click', () => {
 currentIndex = (currentIndex - 1 + 3) % 3;
 updateSlide();
});

setInterval(() => {
 currentIndex = (currentIndex + 1) % 3;
 updateSlide();
}, 5000);

const activitiesGrid = document.getElementById('activities-grid');
const viewMoreBtn = document.getElementById('view-more-btn');
const hiddenActivities = document.querySelectorAll('.hiddenActivities');

viewMoreBtn.addEventListener('click', () => {
 // Show hidden activities
 hiddenActivities.forEach(activity => {
  activity.classList.remove('hidden');
  activity.classList.add('block');
 });

 // Hide "View More" button and show "Close" button
 viewMoreBtn.classList.add('hidden');
});

// Modal Elements
const modal = document.getElementById('registration-modal');
const form = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');
const cvUpload = document.getElementById('cv-upload');
const fileName = document.getElementById('file-name');

// Open Modal
document.querySelectorAll('.register-btn').forEach(btn => {
 btn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('modal-active'), 10);
 });
});

// Close Modal
modal.addEventListener('click', (e) => {
 if (e.target.closest('.modal-content') === null) {
  modal.classList.remove('modal-active');
  setTimeout(() => modal.classList.add('hidden'), 300);
 }
});

// Handle File Upload
cvUpload.addEventListener('change', (e) => {
 fileName.textContent = e.target.files[0]?.name || '';
});

// Handle Form Submission
form.addEventListener('submit', (e) => {
 e.preventDefault();

 // Show success message
 form.classList.add('hidden');
 successMessage.classList.remove('hidden');
 successMessage.classList.add('success-active');

 // Reset form after 3 seconds
 setTimeout(() => {
  modal.classList.remove('modal-active');
  setTimeout(() => {
   modal.classList.add('hidden');
   form.classList.remove('hidden');
   successMessage.classList.add('hidden');
   successMessage.classList.remove('success-active');
   form.reset();
   fileName.textContent = '';
  }, 300);
 }, 3000);
});

// Close Modal with Cross SVG
const closeModalBtn = document.getElementById('close-modal-btn');
closeModalBtn.addEventListener('click', () => {
 modal.classList.remove('modal-active');
 setTimeout(() => modal.classList.add('hidden'), 300);
});

