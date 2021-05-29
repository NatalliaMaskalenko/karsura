(() => {
  const refs = {
    openModalBtn: document.querySelector("[mobile-menu-open]"),
    closeModalBtn: document.querySelector("[mobile-menu-close]"),
    modal: document.querySelector("[mobile-menu]"),
    mobileNavList: document.querySelector('[data-menu-list]'),
     };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.mobileNavList.addEventListener("click", toggleModal);
 
  

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
   
})();



