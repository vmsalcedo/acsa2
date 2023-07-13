


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });


  window.addEventListener('scroll', function() {
    var myNavbar = document.getElementById('myNavbar');
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition > 0) {
      myNavbar.classList.add('navbar-scrolled');
    } else {
      myNavbar.classList.remove('navbar-scrolled');
    }
  });



  