const works = [
  {
    name: '1.- Multi-Post Stories\nGain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLocation: './images/project.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: 'https://mail.google.com/',
    source: 'https://github.com/jevazquezb',
  },
  {
    name: '2.- Multi-Post Stories\nGain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLocation: './images/project.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: 'https://mail.google.com/',
    source: 'https://github.com/jevazquezb',
  },
  {
    name: '3.- Multi-Post Stories\nGain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLocation: './images/project.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: 'https://mail.google.com/',
    source: 'https://github.com/jevazquezb',
  },
  {
    name: '4.- Multi-Post Stories\nGain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLocation: './images/project.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: 'https://mail.google.com/',
    source: 'https://github.com/jevazquezb',
  },
  {
    name: '5.- Multi-Post Stories\nGain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLocation: './images/project.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: 'https://es.wikipedia.org/wiki/Yahoo!',
    source: 'https://github.com/jevazquezb',
  },
  {
    name: '6.- Multi-Post Stories\nGain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLocation: './images/project.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    live: 'https://mail.google.com/',
    source: 'https://github.com/jevazquezb',
  },
];

const popupCont = document.querySelector('.popup-container');
popupCont.style.display = 'none';

function createElement(type, classes = null, text = null, href = null) {
  const element = document.createElement(type);
  if (classes) element.setAttribute('class', classes);
  if (text) element.textContent = text;
  if (href) element.setAttribute('href', href);
  return element;
}

function languages(lang) {
  const list = createElement('ul', 'cards-lang flex');
  lang.forEach((langKey) => {
    const listAnchor = createElement('a', 'cards-lang-button', langKey, '#');
    const listItem = createElement('li');
    listItem.appendChild(listAnchor);
    list.appendChild(listItem);
  });
  return list;
}

function closePopup() {
  popupCont.style.display = 'none';
  popupCont.removeChild(popupCont.firstChild);
}

function createButton(src, alt, text, href) {
  const popBtn = createElement('a', 'access-button', text, href);
  const btnIcon = createElement('img', 'pop-icon');
  btnIcon.src = src;
  btnIcon.alt = alt;
  popBtn.appendChild(btnIcon);
  return popBtn;
}

function displayPopup(work) {
  // Create the main container of the Pop-Up
  const popupBody = createElement('div', 'pop-body');

  // Add a close-icon within an anchor for the close button.
  const closeBtn = createElement('a', 'close-btn', null, '#');
  const closeImg = createElement('img', 'close-img-mob');
  closeImg.src = './images/close_pop_desktop.png';
  closeImg.alt = 'Close button';
  closeBtn.appendChild(closeImg);
  closeBtn.addEventListener('click', closePopup);
  popupBody.appendChild(closeBtn);

  // Add the image of the project
  const popImg = createElement('img', 'pop-img');
  popImg.src = work.imageLocation;
  popImg.alt = 'Work image';
  popupBody.appendChild(popImg);

  // Add the title of the project
  popupBody.appendChild(createElement('h3', 'pop-title', work.name));

  // Add technologies used in the project
  const popLang = languages(work.technologies);
  popLang.classList.add('pop-lang');
  popupBody.appendChild(popLang);

  // Add description of the project
  popupBody.appendChild(createElement('p', 'pop-description', work.description));

  // Add link buttons
  const popBtnCont = createElement('div', 'pop-btn-cont');

  // Add first button
  popBtnCont.appendChild(
    createButton(
      './images/see_live.png',
      'See live version icon',
      'See Live',
      work.live,
    ),
  );

  // Add second button
  popBtnCont.appendChild(
    createButton(
      './images/see_src.png',
      'GitHub icon',
      'See Source',
      work.source,
    ),
  );

  // Add button section to card body
  popupBody.appendChild(popBtnCont);

  // Add Card to container
  popupCont.appendChild(popupBody);
  popupCont.style.display = 'block';
}

function addCard(work) {
  const cardContent = createElement('div', 'cards flex');
  cardContent.appendChild(createElement('h2', 'cards-title', work.name));
  cardContent.appendChild(languages(work.technologies));

  const anchorBtn = createElement('a', 'access-button', 'See Project', '#');
  anchorBtn.addEventListener('click', () => displayPopup(work));
  cardContent.appendChild(anchorBtn);

  const cardContainer = createElement('div', 'works flex');
  cardContainer.appendChild(cardContent);
  return cardContainer;
}

const mainCardContainer = document.querySelector('.works-container.flex');
works.forEach((work) => {
  mainCardContainer.appendChild(addCard(work));
});