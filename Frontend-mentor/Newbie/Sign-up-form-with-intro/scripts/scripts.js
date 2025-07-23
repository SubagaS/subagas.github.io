const form = document.querySelector('form');
const inputContainers = document.querySelectorAll('.input-container');
const allInputs = document.querySelectorAll('input');
const formContainer = document.querySelector('.form-container');
const success = document.querySelector('.success-container');

function processForm(e) {
  e.preventDefault();
  let numErrorContainers = 0;
  inputContainers.forEach((inputContainer) => {
    if (inputContainer.firstElementChild.value === '' || !inputContainer.firstElementChild.checkValidity()) {
      const errorContainer = createErrorContainer(
        inputContainer.firstElementChild.placeholder
      );
      inputContainer.appendChild(errorContainer);
      numErrorContainers += 1;
      form.style.gap = '1.5rem';
    }
  });

  if (numErrorContainers === 0) {
    form.classList.add('hidden');
    success.classList.remove('hidden');
  }
}

function createErrorContainer(placeholder) {
  const div = document.createElement('div');
  div.className = 'error-container';

  const p = document.createElement('p');
  p.className = 'error-message';
  p.textContent = `${placeholder} cannot be empty`;

  const image = document.createElement('img');
  image.className = 'error-icon';
  image.src = './images/icon-error.svg';

  div.appendChild(p);
  div.appendChild(image);
  return div;
}

function removeError() {
  if (!this.nextElementSibling) {
    return;
  } else {
    this.nextElementSibling.remove();
  }
}

form.addEventListener('submit', processForm);

allInputs.forEach((input) => {
  input.addEventListener('click', removeError);
});
