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

$(document).ready(function(){
 
  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
  $('.scrollup').fadeOut();
  }
  });
   
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });
   
  });