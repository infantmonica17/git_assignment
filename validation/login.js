const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  
  if(username.value.trim() ==''){
    error(username, 'Username cannot be empty');
  }else{
    success(username);
  }
    if(password.value.trim() ==''){
        error(password, 'Password cannot be empty');
    }
    else{
        success(password);
    }
});

function error(element, message){
    element.style.border = '3px solid red';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = message;
    p.style.visibility = 'visible';
}

function success(element){
    element.style.border = '3px solid green';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';
}