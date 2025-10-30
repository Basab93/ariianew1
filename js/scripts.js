/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', () => {
  // Navbar shrink
  const navbarShrink = () => {
    const navbarCollapsible = document.querySelector('#mainNav');
    if (!navbarCollapsible) return;
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  // ScrollSpy (Bootstrap 5)
  const mainNav = document.querySelector('#mainNav');
  if (mainNav && typeof bootstrap !== 'undefined') {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Collapse responsive navbar on link click
  const navbarToggler = document.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#mainNav .nav-link')
  );
  responsiveNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // Lightbox optional — comment out if not used
  if (typeof SimpleLightbox !== 'undefined') {
    new SimpleLightbox({ elements: '#portfolio a.portfolio-box' });
  }
});

// Optional: add a class after scrolling a bit
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNav');
  if (!navbar) return;
  if (window.scrollY > 60) navbar.classList.add('navbar-scrolled');
  else navbar.classList.remove('navbar-scrolled');
});
