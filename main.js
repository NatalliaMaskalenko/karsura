(() => {
  const refs = {
    openModalBtn: document.querySelector("[mobile-menu-open]"),
    closeModalBtn: document.querySelector("[mobile-menu-close]"),
    modal: document.querySelector("[mobile-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

;(() => {
  const menuBtnRef = document.querySelector("[services__btn--more]")
  const mobileMenuRef = document.querySelector("[services__content--more]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })
})()

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[services__btn--more]"),
//     closeModalBtn: document.querySelector("[services__btn--less]"),
//     modal: document.querySelector("[services__content--more]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();