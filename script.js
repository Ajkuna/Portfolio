$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 120) {
      $(`.navbar`).addClass("sticky");
    } else {
      $(`.navbar`).removeClass("sticky");
    }

    if (this.scrollY > 400) {
      $(`.scroll-up-btn`).addClass("show");
    } else {
      $(`.scroll-up-btn`).removeClass("show");
    }
  });

  // slide up script
  $(`.scroll-up-btn`).click(function() {
    $('html').animate({scrollTop: 0})
  });


  // toggle menu/navbar script
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });


  // typing aniamtion script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Student", "Designer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Student", "Designer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  });


  // Owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });


  // copy email to clipboard on click
  const email = document.querySelector(".email .emailText");

  email.onclick = function() {
    document.execCommand("copy");
  }

  email.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", email.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });


  // 'copied' popup on the button above
  $('.email').click(function() {
    $('.popup')
    .toggleClass("show")
    .delay(1000).fadeOut();
  })

});
