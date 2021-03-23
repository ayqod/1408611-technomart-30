const contactsButton = document.querySelector(".contacts-button");
const modalWindow = document.querySelector(".modal-feedback");
const modalWindowCloseButton = modalWindow.querySelector(".modal-close-button");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.toggle("modal-feedback--visible");
})

modalWindowCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.toggle("modal-feedback--visible");
})
