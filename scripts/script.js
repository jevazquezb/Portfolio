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

  let menuOption = document.createElement('a');
  menuOption.href = '#';
  menuOption.textContent = 'Portfolio';
  menuOption.classList.add('menu-option');
  menuCanvas.appendChild(menuOption);

  menuOption = document.createElement('a');
  menuOption.href = '#';
  menuOption.textContent = 'About';
  menuOption.classList.add('menu-option');
  menuCanvas.appendChild(menuOption);

  menuOption = document.createElement('a');
  menuOption.href = '#';
  menuOption.textContent = 'Contact';
  menuOption.classList.add('menu-option');
  menuCanvas.appendChild(menuOption);
}

const menuBtn = document.querySelector('.menu-anchor');
menuBtn.addEventListener('click', displayMenu);