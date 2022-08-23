(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModal);
  refs.closeModalBtn.addEventListener("click", onCloseModal);
  refs.modal.addEventListener('click', onClickBackdropModalClose)

  function onOpenModal() {
    window.addEventListener('keydown', inKeyDownEscModalClose)
    refs.modal.classList.toggle("backdrop--is-hidden");
  }
  function onCloseModal() {
    window.removeEventListener('keydown',inKeyDownEscModalClose)
    refs.modal.classList.toggle("backdrop--is-hidden");
  }
  
  function onClickBackdropModalClose(event) {
    if (event.target === event.currentTarget) {
      onCloseModal()
    }
  }
  function inKeyDownEscModalClose(event) {
    const KEY_CODE_ESCAPE = 'Escape';

    if (event.code === KEY_CODE_ESCAPE) {
      onCloseModal()
    }
  }
})();