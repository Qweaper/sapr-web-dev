const showButton = document.getElementsByClassName('show-button')[0];
const formWrapper = document.getElementsByClassName('form-wrapper')[0];
const checkBxBtn = document.getElementById('check_boxBTN');
const showPasswrdBtn = document.getElementById('show-password-btn');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const sumbitButton = document.getElementById('validate-sumbit-bttn');
const regForm = document.getElementById('form-elems');
const modalWin = document.getElementById('modal')

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
    console.log(e);
    if (e.target.id === 'emailInput')
    {
        let email = e.target.value;
        let pattern = new RegExp('/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i');
        let example  =
        console.log(email.match(pattern));
        if (email.match(pattern) !== null)
        {
            e.target.border = '1px solid #1cd3a2';
        }
        else{
            e.target.border = '1px solid #f00';
        }
    }
    else if (e.target.id === 'passwordInput')
    {
        let password = e.target.type;
        if(password.length >= 6)
        {
            e.target.border = '1px solid #1cd3a2';
        }
        else if(password.length < 6)
        {
            e.target.border = '1px solid #f00';
        }
    }
};

emailInput.addEventListener('blur', validInput);
passwordInput.addEventListener('blur', validInput);

sumbitButton.addEventListener('click', (e) => 
{   
    let formData = new FormData(regForm);
    console.log(formData);
    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
    }
    e.preventDefault();
});

// modalWin.addEventListener('click', (e) => {
//     modalWin.classList.remove('modal-visible');
// })