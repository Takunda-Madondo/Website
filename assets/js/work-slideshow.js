// Simple slideshow for the 'work' article
// Add image paths to the images array below
const images = [
  'images/page_1.PNG',
  'images/page_2.PNG',
  'images/page_3.PNG'
];

let current = 0;
const imgElement = document.querySelector('#work .image.main img');

function showImage(index) {
  if (!imgElement) return;
  imgElement.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

// Add event listeners to buttons if present
const nextBtn = document.getElementById('work-next');
const prevBtn = document.getElementById('work-prev');
if (nextBtn) nextBtn.addEventListener('click', nextImage);
if (prevBtn) prevBtn.addEventListener('click', prevImage);

// Initialize
showImage(current);
