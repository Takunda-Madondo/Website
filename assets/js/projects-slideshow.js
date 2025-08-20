// Slideshow for the Projects section
// Add image paths to the images array below
const projectsImages = [
  'images/page_1.PNG',
  'images/page_2.PNG',
  'images/page_3.PNG'
];

let projectsCurrent = 0;
const projectsImgElement = document.querySelector('#projects-slideshow-img');

function showProjectsImage(index) {
  if (!projectsImgElement) return;
  projectsImgElement.src = projectsImages[index];
}

function nextProjectsImage() {
  projectsCurrent = (projectsCurrent + 1) % projectsImages.length;
  showProjectsImage(projectsCurrent);
}

function prevProjectsImage() {
  projectsCurrent = (projectsCurrent - 1 + projectsImages.length) % projectsImages.length;
  showProjectsImage(projectsCurrent);
}

// Add event listeners to buttons if present
const projectsNextBtn = document.getElementById('projects-next');
const projectsPrevBtn = document.getElementById('projects-prev');
if (projectsNextBtn) projectsNextBtn.addEventListener('click', nextProjectsImage);
if (projectsPrevBtn) projectsPrevBtn.addEventListener('click', prevProjectsImage);

// Initialize
showProjectsImage(projectsCurrent);
