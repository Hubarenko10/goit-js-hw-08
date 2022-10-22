import throttle from 'lodash.throttle'; 
const throttle = require('lodash.throttle');
const email = document.querySelector('input[name = "email"]');
const message = document.querySelector('textarea[name = "message"]');
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave))
 },500));

form.addEventListener('submit', e => {
    e.preventDefault();
     if (email.value === '' || message.value === '') {
    alert('You should to fill an empty field')
  } 
   const userData = {
    Email: email.value,
    message: message.value
  }
  console.log(userData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
 

})
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}

