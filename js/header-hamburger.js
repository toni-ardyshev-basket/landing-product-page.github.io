document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu__btn').addEventListener('click', () => {
    let nav_bar = document.querySelector('#nav-bar');
    if (!nav_bar.classList.contains('open-menu')) {
      nav_bar.style.height = "144px";
      nav_bar.classList.remove('close-menu');
      nav_bar.classList.add('open-menu');

    } else if (nav_bar.classList.contains('open-menu')) {
      nav_bar.style.height = "0px";
      nav_bar.classList.remove('open-menu');
      nav_bar.classList.add('close-menu');
    }
  })
  nav_bar.preventDefault();
})


