// Slideshow for the X(Twitter) Sentiment Analysis section
// Add image paths to the images array below
const twitterImages = [
  'images/sentiments_1.PNG',
  'images/sentiments_2.PNG',
  'images/sentiments_3.PNG'
];

let twitterCurrent = 0;
const twitterImgElement = document.querySelector('#twitter-slideshow-img');

function showTwitterImage(index) {
  if (!twitterImgElement) return;
  twitterImgElement.src = twitterImages[index];
}

function nextTwitterImage() {
  twitterCurrent = (twitterCurrent + 1) % twitterImages.length;
  showTwitterImage(twitterCurrent);
}

function prevTwitterImage() {
  twitterCurrent = (twitterCurrent - 1 + twitterImages.length) % twitterImages.length;
  showTwitterImage(twitterCurrent);
}

// Add event listeners to buttons if present
const twitterNextBtn = document.getElementById('twitter-next');
const twitterPrevBtn = document.getElementById('twitter-prev');
if (twitterNextBtn) twitterNextBtn.addEventListener('click', nextTwitterImage);
if (twitterPrevBtn) twitterPrevBtn.addEventListener('click', prevTwitterImage);

// Initialize
showTwitterImage(twitterCurrent);
