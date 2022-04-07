const form = document.querySelector('#form');
const email = document.querySelector('#email');

const errorMsgContainer = document.querySelector('.msg-cont');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit',validateEmail);

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