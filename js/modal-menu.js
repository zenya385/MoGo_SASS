(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal-menu]"),
    closeModalBtn: document.querySelector("[data-close-modal-menu]"),
    modal: document.querySelector("[data-modal-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
