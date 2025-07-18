const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const errorContainer = document.querySelector('.error-container');
const successContainer = document.querySelector('.success-container');

function showError(e) {
  e.preventDefault();
  if (!emailInput.checkValidity() || emailInput.value === '') {
    errorContainer.classList.remove('hidden');
    successContainer.classList.add('hidden');
    errorContainer.classList.add('invalid');
  } else {
    successContainer.classList.remove('hidden');
    errorContainer.classList.add('hidden');
    successContainer.classList.add('valid');
  }
}

form.addEventListener('submit', showError);
