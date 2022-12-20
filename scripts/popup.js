const works = [
  {
    name: 'To-do List',
    description: 'This is a simple to-do list web application. The user can add and remove tasks from the list, edit the description of the tasks and mark them as complete to clean the list.',
    imageLocation: './images/to_do_list.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://jevazquezb.github.io/To_do_list/',
    source: 'https://github.com/jevazquezb/To_do_list',
  },
  {
    name: 'TV Shows Network',
    description: 'A website that allows users to find, like, and comment on different TV shows.',
    imageLocation: './images/tv_shows.png',
    technologies: ['HTML', 'SCSS', 'JavaScript', 'Webpack'],
    live: 'https://gopxfs.github.io/TV-Shows-Network/dist/',
    source: 'https://github.com/Gopxfs/TV-Shows-Network',
  },
  {
    name: 'Bookstore',
    description: 'This website allows the user to add or remove a book, and display a list of them.',
    imageLocation: './images/bookstore.png',
    technologies: ['JavaScript', 'React', 'Redux'],
    live: 'https://bookstore-javb.netlify.app/',
    source: 'https://github.com/jevazquezb/Bookstore',
  },
  // {
  //   name: 'Catalog of my things',
  //   description: 'We developed a Ruby App that seizes OOP concepts to create a catalog of
  //                 different types of elements that inherit properties of a base class.',
  //   imageLocation: './images/catalog.png',
  //   technologies: ['Ruby', 'PostgreSQL'],
  //   live: 'https://github.com/indigodavid/catalog_of_my_things',
  //   source: 'https://github.com/indigodavid/catalog_of_my_things',
  // },
  {
    name: 'Carbon Intensity in the UK',
    description: 'This Single-Page Application (SPA) allows you to monitor carbon dioxide (CO\u2082) emissions for each region of the UK and the nation itself. CO\u2082 emissions are updated every half hour. The App contains a search field for the user to quickly look up the region of interest. Also, it displays a details page for every region showing the CO\u2082 percentage contribution by energy source.',
    imageLocation: './images/carbon_desk2.png',
    technologies: ['JavaScript', 'React', 'Redux'],
    live: 'https://jevazquezb.github.io/carbon_intensity/',
    source: 'https://github.com/jevazquezb/carbon_intensity',
  },
  // {
  //   name: 'Finapp',
  //   description: 'Finapp is a mobile web application where you can manage your budget. It allows the user to handle transactions associated with a category to see how much money has been spent and on what.',
  //   imageLocation: './images/finapp2.png',
  //   technologies: ['Ruby', 'PostgreSQL', 'Ruby on Rails'],
  //   live: 'https://finapp.onrender.com/',
  //   source: 'https://github.com/jevazquezb/Budget_app',
  // },
  {
    name: 'Math Magicians',
    description: 'A calculator app where users can perform basic math operations.',
    imageLocation: './images/math_magicians.png',
    technologies: ['Javascript', 'React', 'Redux'],
    live: 'https://math-magicians-javb.netlify.app/',
    source: 'https://github.com/jevazquezb/Math_magicians',
  },
  {
    name: 'Ducati Rentals',
    description: 'Ducati Rentals is an app that allows you to rent a Ducati bike wherever you are just by selecting one of our models and setting the dates to start feeling the power. Additionally, you can earn some extra money by renting your bike to other people. Go to our website, log in, upload your bike model and bam! Start making money!',
    imageLocation: './images/ducati.png',
    technologies: ['Javascript', 'React', 'Redux', 'RoR'],
    live: 'https://ducati-rentals.netlify.app/',
    source: 'https://github.com/AbrahaKahsay/final-capstone-frontend',
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

function createButton(src, alt, text, href, target) {
  const popBtn = createElement('a', 'access-button', text, href);
  popBtn.target = target;
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
      '_blank',
    ),
  );

  // Add second button
  popBtnCont.appendChild(
    createButton(
      './images/see_src.png',
      'GitHub icon',
      'See Source',
      work.source,
      '_blank',
    ),
  );

  // Add button section to card body
  popupBody.appendChild(popBtnCont);

  // Add Card to container
  popupCont.appendChild(popupBody);
  popupCont.style.display = 'block';
}

function addCard(work) {
  // Add the image of the project
  const imgCont = createElement('div', 'cards-img-cont');
  const cardImg = createElement('img', 'card-img');
  cardImg.src = work.imageLocation;
  cardImg.alt = work.name;
  imgCont.appendChild(cardImg);

  const cardContent = createElement('div', 'cards flex');
  cardContent.appendChild(createElement('h2', 'cards-title', work.name));
  cardContent.appendChild(languages(work.technologies));

  const anchorBtn = createElement('a', 'access-button', 'See Project', '#');
  anchorBtn.addEventListener('click', () => displayPopup(work));
  cardContent.appendChild(anchorBtn);

  const cardContainer = createElement('div', 'works flex');
  cardContainer.appendChild(imgCont);
  cardContainer.appendChild(cardContent);
  return cardContainer;
}

const mainCardContainer = document.querySelector('.works-container.flex');
works.forEach((work) => {
  mainCardContainer.appendChild(addCard(work));
});