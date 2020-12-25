document.addEventListener('DOMContentLoaded', () => {
  const nav_bar = document.querySelector('#nav-bar');
  const menu__toggle = document.querySelector('#menu__toggle');
  const logo = document.querySelector('.logo');
  
  function openMenu () {
    nav_bar.style.height = "144px";
    nav_bar.classList.remove('close-menu');
    nav_bar.classList.add('open-menu');
    logo.style.borderBottom = '1px solid #333'
  }

  function closeMenu () {
    nav_bar.classList.remove('open-menu');
    nav_bar.classList.add('close-menu');
    if(window.screen.width < 800) nav_bar.style.height = "0px";

    logo.style.borderBottom = null;
  }

  document.querySelector('.menu__btn').addEventListener('click', () => {
    if (!nav_bar.classList.contains('open-menu')) {
      openMenu();
    } else if (nav_bar.classList.contains('open-menu')) {
      closeMenu();      
    }
  })


  const anchors = document.querySelectorAll('a.nav-link');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      menu__toggle.checked = false;
      closeMenu();

      const blockID = anchor.getAttribute('href')
      let size = document.querySelector(blockID).offsetTop + "px"; //offset().top
      document.querySelector('body').animate({ scrollTop: size, duration: 1000 });
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      /*
          const blockID = anchor.getAttribute('href')
          var sizeBody = document.body.offsetTop
          var sizeBlock = document.querySelector(blockID).offsetTop;
          var size = sizeBody - sizeBlock + 'px';
          console.log(sizeBody,sizeBlock,size);

          document.querySelector('html').animate([
            { transform: 'translate(0, 0)' },
            { transform: 'translate(0, size)' },
          ], {
            duration: 2000,
            fill: 'forwards',
          })
      */
     
      nav_bar.classList.remove('close-menu');
    })
  }
})


