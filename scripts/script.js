function hideMenu(item) {
  item.addEventListener('click', () => {
    const menuCanvas = document.querySelector('.interactive-menu');
    menuCanvas.remove();
  });
}

function createMenuOption(text, ref) {
  let menuOption = document.createElement('a');
  menuOption.href = ref;
  menuOption.textContent = text;
  menuOption.classList.add('menu-option');
  return menuOption;
}

function displayMenu() {
  const menuIcon = document.querySelector('nav.menu-button');
  const menuCanvas = document.createElement('nav');
  menuCanvas.classList.add('interactive-menu');
  menuIcon.after(menuCanvas);

  const closeBtn = document.createElement('img');
  closeBtn.src = 'images/close.png';
  closeBtn.alt = 'Close menu';
  closeBtn.title = 'Close menu';
  closeBtn.classList.add('close-menu');
  menuCanvas.appendChild(closeBtn);

  menuCanvas.appendChild(createMenuOption('Portfolio', '#works'));
  menuCanvas.appendChild(createMenuOption('About', '#about'));
  menuCanvas.appendChild(createMenuOption('Contact', '#form'));

  const menuItems = document.querySelectorAll('.interactive-menu > *');
  menuItems.forEach(hideMenu);
}

const menuBtn = document.querySelector('.menu-anchor');
menuBtn.addEventListener('click', displayMenu);
