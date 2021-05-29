  // $(document).ready(function(){
   
  //   $(window).scroll(function(){
  //   if ($(this).scrollTop() > 100) {
  //   $('.scrollup').fadeIn();
  //   } else {
  //   $('.scrollup').fadeOut();
  //   }
  //   });
     
  //   $('.scrollup').click(function(){
  //   $("html, body").animate({ scrollTop: 0 }, 600);
  //   return false;
  //   });
     
  //   });

  mybutton = document.getElementById("myBtn");

  // Когда пользователь прокручивает вниз 20px от верхней части документа, покажите кнопку
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
  function topFunction() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
  }