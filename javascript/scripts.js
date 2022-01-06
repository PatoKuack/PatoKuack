const maxWithPhone = 1024;
const showMenu = (toggleId, navigatorId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navigatorId);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.classList.toggle('active');
    });
    window.addEventListener('resize', () => {
      if (visualViewport.width >= maxWithPhone) {
        nav.classList.remove('show');
        toggle.classList.remove('active');
      }
    });
    // toggle.addEventListener('click', () => {
    //   toggle.classList.toggle('active');
    // });
  }
}

showMenu('menu-toggle', 'menu-navigator');