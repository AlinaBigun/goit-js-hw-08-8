import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
populateForm();
form.addEventListener('input', throttle(onMessageInput, 500));
form.addEventListener('submit', onFormSubmit);
function onMessageInput() {
  const objectSave = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectSave));
}
function onFormSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Заповніть будь-ласка, всі поля!');
  }
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
function populateForm() {
  const savedObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedObject) {
    email.value = savedObject.email;
    message.value = savedObject.message;
  }
}

