const showButton = document.getElementsByClassName('show-button')[0];
const formWrapper = document.getElementsByClassName('form-wrapper')[0];
const checkBxBtn = document.getElementById('check_boxBTN');
const passwordInput = document.getElementById('passwordInput');
showButton.addEventListener('click', (event) => 
{
    if (showButton.value === 'inactive')
    {
        formWrapper.style.opacity = '1';
        showButton.value = 'active';
    }
    else
    {
        formWrapper.style.opacity = '0';
        showButton.value = 'inactive';
    }
});

checkBxBtn.addEventListener('change', (e) => {
    if (checkBxBtn.checked){
        passwordInput.setAttribute('type', 'text');
        checkBxBtn.value = true;
    }
    else{
        passwordInput.setAttribute('type', 'password');
        checkBxBtn.value = false;
    }
});