const minusIcons = document.querySelectorAll('.minus-icon');
const plusIcons = document.querySelectorAll('.plus-icon');
const questionsContainer = document.querySelectorAll('.question');

function showAnswerOnIcon() {
  this.style.display = 'none';
  const minusIcon = this.nextElementSibling;
  minusIcon.style.display = 'block';
  const questionContainer = this.parentElement.parentElement;
  const answer = questionContainer.lastElementChild;
  answer.style.display = 'block';
}

function hideAnswerOnIcon() {
  this.style.display = 'none';
  const plusIcon = this.previousElementSibling;
  plusIcon.style.display = 'block';
  const questionContainer = this.parentElement.parentElement;
  const answer = questionContainer.lastElementChild;
  answer.style.display = 'none';
}
function showHideAnswerOnQues() {
  const answer = this.parentElement.parentElement.lastElementChild;
  const plusIcon = this.nextElementSibling;
  const minusIcon = plusIcon.nextElementSibling;
  const isHidden = window.getComputedStyle(answer).display === 'none';
  if (isHidden) {
    answer.style.display = 'block';
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  } else {
    answer.style.display = 'none';
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  }
}

questionsContainer.forEach((question) => {
  question.firstElementChild.addEventListener('click', showHideAnswerOnQues);
});

minusIcons.forEach((minusIcon) => {
  minusIcon.addEventListener('click', hideAnswerOnIcon);
});

plusIcons.forEach((plusIcon) => {
  plusIcon.addEventListener('click', showAnswerOnIcon);
});
