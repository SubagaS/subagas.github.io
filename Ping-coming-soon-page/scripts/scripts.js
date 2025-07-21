const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emptyError = document.querySelector('.empty-error');
const invalidEmailError = document.querySelector('.invalid-email-error');
const successMessage = document.querySelector('.success-message');

function showMessage(e) {
  e.preventDefault();
  if (emailInput.value === '') {
    emptyError.classList.remove('hidden');
    emailInput.style.border = 'solid 2px var(--red-400)';
  } else if (!emailInput.checkValidity()) {
    invalidEmailError.classList.remove('hidden');
    emptyError.classList.add('hidden');
    emailInput.style.border = 'solid 2px var(--red-400)';
  } else {
    successMessage.classList.remove('hidden');
    emptyError.classList.add('hidden');
    invalidEmailError.classList.add('hidden');
    emailInput.style.border = 'solid 2px green';
  }
}

form.addEventListener('submit', showMessage);
