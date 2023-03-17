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
    errorMessage.style.color = '#f00'
    let valid = true;
    if (e.target.id === 'emailInput')
    {
        if (!e.target.validity.typeMismatch)
        {
            e.target.style.border = '1px solid #1cd3a2';
        }
        else{
            e.target.style.border = '1px solid #f00';
            valid = false;
        }
    }
    if (e.target.id === 'passwordInput')
    {
        let password = e.target.value;
        if(password.length >= 6)
        {
            e.target.style.border = '1px solid #1cd3a2';
        }
        else if(password.length < 6)
        {
            e.target.style.border = '1px solid #f00';
            valid = false;
        }
    }
    if (!valid)
        {
            errorMessage.innerText = 'Email or Password are invalid. Please try again.'
        }
    console.log(errorMessage.innerText);
};

emailInput.addEventListener('blur', validInput);
passwordInput.addEventListener('blur', validInput);

sumbitButton.addEventListener('click', (e) => 
{   
    let formData = new FormData(regForm); // добавить имена в атрибуты
    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
    }
    e.preventDefault();
});

modalWin.addEventListener('click', (e) => {
    // отследить таргет, что объект точно фон
    if(e.target.id === 'modal'){
        modalWin.classList.toggle('modal-visible');
        formWrapper.classList.toggle('form-wrapper-hidden');
    }
})