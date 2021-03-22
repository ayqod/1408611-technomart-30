const contactsButton = document.querySelector(".contacts-button");
const modalWindow = document.querySelector(".modal-feedback");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.toggle("modal-feedback--visible");
})

const modalWindowCloseButton = modalWindow.querySelector(".modal-close-button");

modalWindowCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.toggle("modal-feedback--visible");
})
