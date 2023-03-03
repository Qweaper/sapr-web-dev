// DOM, обработка данные из форм



// Document Object Model

//html - разметка, css - красоты и дизайн, js - функционал

const form = document.getElementById("id"); // самый популярный вариант

// const form = document.getElementsByClassName("class");
// const form = document.getElementsByTagName("form");

// const form = document.querySelector(".class"); //можно писать (.class > p) #id tag
// const form = document.querySelectorAll(); // 

// body.style.backgroundColor = "#301020";

const div = document.getElementById("div");
const button = document.getElementById('button');
const input = document.getElementById('input');

// button.textContent = "some text"; // добавляет только текст 
// button.innerHTML = "some text"; // изменяет сам HTML, что может быть опасно, так как можно сделать брешь в безопасности сайта

function clicker (event) 
{ event.stopPropagation();

    console.log(`click на ${event.currentTarget}`);
};

div.onclick = clicker;

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    // console.log(event);
});

div.addEventListener("click", clicker);
// div.addEventListener("click", clicker1);
// div.addEventListener("click", clicker2);

// div.removeEventListener("click", clicker); // удаляет функцию-слушатель события

// div.classList.add('open');   //можно сделать несколько классов и включать выключать их 
// div.classList.remove('open');
// div.classList.toggle('open')


input.addEventListener('focus', ()=>{
    
});
input.addEventListener('blur', ()=>{console.log('blur');});


form.addEventListener("click", clicker);
button.addEventListener("click", clicker); // можно добавить несколько обработчиков событий

console.dir(body);