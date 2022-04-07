const form = document.querySelector('#contact-form');

const userName = document.querySelector('#user-name');
const email = document.querySelector('#email');
const userMsg = document.querySelector('#user-msg');

const errorMsgContainer = document.querySelector('.msg-cont');
const errorMsg = document.querySelector('.error-msg');

function validateEmail(event) {
  if (email.value === email.value.toLowerCase()) {
    errorMsgContainer.classList.add('hidden');
    errorMsg.textContent = '';
    email.classList.remove('highlight');
  } else {
    errorMsgContainer.classList.remove('hidden');
    errorMsg.textContent = 'Email should be in lower case';
    email.classList.add('highlight');
    event.preventDefault();
  }
}

form.addEventListener('submit', validateEmail);

// Local storage

// Extracted function from lesson
function storageAvailable(type) {
  let storage;
  try {
    const x = '__storage_test__';
    storage = window[type];
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

function fillFormValues() {
  const userValues = JSON.parse(localStorage.getItem('userValues')) || {
    name: '',
    email: '',
    message: '',
  };
  userName.value = userValues.name;
  email.value = userValues.email;
  userMsg.value = userValues.message;
}

function saveFormValues() {
  const userValues = {
    name: userName.value,
    email: email.value,
    message: userMsg.value,
  };
  localStorage.setItem('userValues', JSON.stringify(userValues));
}

if (storageAvailable('localStorage')) {
  fillFormValues();
  userName.oninput = saveFormValues;
  email.oninput = saveFormValues;
  userMsg.oninput = saveFormValues;
}
