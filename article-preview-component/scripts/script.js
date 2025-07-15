const shareProfileBtn = document.querySelector('.share-icon-profile');
const shareLinkBtn = document.querySelector('.share-icon-links');
const profileLinkContainer = document.querySelector('.profile-links');

function showLinks() {
  profileLinkContainer.classList.toggle('hidden');
}
function hideLinks() {
  profileLinkContainer.classList.toggle('hidden');
}

shareProfileBtn.addEventListener('click', showLinks);
shareLinkBtn.addEventListener('click', hideLinks);
