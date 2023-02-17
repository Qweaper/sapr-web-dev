// вариант создания функции
const myFunc1 = function () {
    return 7;
};
const myFunc2 = function () {
    return 7;
};

// проверка на то, что переменные ссылаются на одно и тоже значение
alert(Object.is(myFunc1, myFunc2));

// let c = 1; внешнаяя переменная, от которой зависис какая-либо функция

const sum1 = function(a, b)
{   
    //return a + b + с; // зависит от внешней функции, поэтому не стоит писать подобные зависимости
    return a + b; 
};
const sum2 = function(a, b)
{   
    console.log(a); // тоже явлется внешней зависимости
    return a + b; 
};

const sum3 = sum1;
console.log(sum2);


// const myArray = [];
// const myArray = new Array(5);
const myArray = [1, '2', true, [], ()=>{}, {}]; // можно хранить любые значения
// myArray.length = 2 // -> выведет только первые два элемента
console.log(myArray);

const myObject = {
    0: 1,
    1: '2',
    2: true,
    lenght: 3,
};

console.log(myObject.lenght); // можем получить значение через точку(как вызов поля из С++)
console.log(myObject['lenght']); // можем получить значение через скобочку


// Object.keys();//
// Object.values();//
// Object.entries();//


for (const key in object) { // перебирает по индексам
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const iterator of object) { // перебор по значениям
    
}

const myFunc = function () {}; // функциональное выражение (сначала переменная, потом функция), не объявляется до нахождение функции
function myFunc3 () {}; // видна в любой точке программы
()=>{}; // анонимная функция 
const sum = (a,b) => a + b; // если нет фигурных скобок, то возвращается значение
const sum4 = (a,b) => {return a + b}; // необходимо return, если есть фигурные скобки

console.log(sum(1, 2));

myArray.forEach((item)=>{console.log(item)});
console.log(myArray.forEach((item => item())));

