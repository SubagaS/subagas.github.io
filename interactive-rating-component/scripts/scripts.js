const form = document.querySelector('form');
const ratingContainer = document.querySelector('.rating-container');
const thankYouContainer = document.querySelector('.thank-you-container');
const rate = document.getElementById('rate');
const submitButton = document.querySelector('.submit-btn');

function showRate(e) {
  e.preventDefault();
  let selectedRate = form.radio.value;
  if (!selectedRate) {
    alert('Please select your desired rate before submitting.');
    return;
  }
  rate.textContent = selectedRate;
  ratingContainer.style.display = 'none';
  thankYouContainer.classList.remove('hidden');
}

form.addEventListener('submit', showRate);
