
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';


const loadFormDataFromStorage = () => {
  const formData = JSON.parse(localStorage.getItem(storageKey));
  if (formData) {
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
};


const saveFormDataToStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}, 500); 


const clearFormDataFromStorage = () => {
  localStorage.removeItem(storageKey);
}


feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearFormDataFromStorage();
  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });
});


feedbackForm.addEventListener('input', saveFormDataToStorage);


loadFormDataFromStorage();