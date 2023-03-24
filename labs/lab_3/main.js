const showButton = document.getElementsByClassName('show-button')[0];
const formWrapper = document.getElementsByClassName('form-wrapper')[0];
const checkBxBtn = document.getElementById('check_boxBTN');
const showPasswrdBtn = document.getElementById('show-password-btn');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const sumbitButton = document.getElementById('validate-sumbit-bttn');
const regForm = document.getElementById('form-elems');
const modalWin = document.getElementById('modal');
const errorMessage = document.getElementById('error-message');

showButton.addEventListener('click', (event) => 
{
    formWrapper.classList.toggle('form-wrapper-hidden');
    modalWin.classList.toggle('modal-visible')
});

checkBxBtn.addEventListener('change', (e) => {
    const passwordInput = document.getElementById('passwordInput');
    if (checkBxBtn.checked){
        passwordInput.setAttribute('type', 'text');
        checkBxBtn.value = true;
    }
    else{
        passwordInput.setAttribute('type', 'password');
        checkBxBtn.value = false;
    }
});

showPasswrdBtn.addEventListener('pointerdown', (e) => {
    passwordInput.setAttribute('type', 'text');
    e.preventDefault();
});

showPasswrdBtn.addEventListener('pointerup', (e) => {
    passwordInput.setAttribute('type', 'password');
    e.preventDefault(); 
});

showPasswrdBtn.addEventListener('click', (e) => {e.preventDefault();})


const validInput = (e) => {
    errorMessage.innerText = '';
    errorMessage.style.color = '#e3256b'
    let valid = true;
    if (e.target.id === 'emailInput')
    {
        
        if (!e.target.validity.typeMismatch && !e.target.validity.valueMissing) // исправить проверку на пустой 
        {
            e.target.style.border = '1px solid #1cd3a2';
        }
        else{
            emailInput.setCustomValidity('Неверный email');
            e.target.style.border = '1px solid #e3256b';
            valid = false;
        }
    }
    if (e.target.id === 'passwordInput')
    {
        console.log(e);
        if(!e.target.validity.tooShort && !e.target.validity.valueMissing) 
        {
            e.target.style.border = '1px solid #1cd3a2';
        }
        else
        {
            passwordInput.setCustomValidity('Неверный пароль');
            e.target.style.border = '1px solid #e3256b';
            valid = false;
        }
    }
    if (!valid)
        {            
            errorMessage.innerText = 'Email or Password are invalid.\nPlease try again.'
        }
};

emailInput.addEventListener('blur', validInput);
passwordInput.addEventListener('blur', validInput);

sumbitButton.addEventListener('click', (e) => 
{   
    let formData = new FormData(regForm); 
    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`); 
    }
});

regForm.addEventListener('submit', (e) => 
{   
    e.preventDefault(); // переделать на событие submit у формы 
});

modalWin.addEventListener('click', (e) => {
    // отследить таргет, что объект точно фон
    if(e.target.id === 'modal'){
        modalWin.classList.toggle('modal-visible');
        formWrapper.classList.toggle('form-wrapper-hidden');
    }
})