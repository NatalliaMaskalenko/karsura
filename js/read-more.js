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