function openDropdown(element) {
    if (window.innerWidth < 768) return;
    element.classList.add('show');
    element.querySelector('.dropdown-menu').classList.add('show');
  }

  function closeDropdown(element) {
    if (window.innerWidth < 768) return;
    element.classList.remove('show');
    element.querySelector('.dropdown-menu').classList.remove('show');
  }

  var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow');
      }
      else {
        nav.classList.remove('bg-light', 'shadow');
      }
    });

