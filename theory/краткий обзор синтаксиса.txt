console.log('Hello Main Frame');

/*
BigInt
    -1
    1
    0
    -0
    inf
    -inf


Nan - none a number

Bool
    true
    false

String
    ""
    ''
    `${}` - форматируемая строка

underfined
null

Symbol

Objects
    Array
    Object
    function


*/

let a = 2;
let b = a; // передаётся по ссылке
a = a + 2;
console.log(b); // b=4

/*
Операторы бинарные
Операторы и операнды
+
-
/
*
++
--
%

>=
<=
== - сравнение с приведением типов к общему
!=

=== - сравнение без приведения типов(строгое равно)
!== 

&&
||

- -унарный мимнус
+ -унарный плюс
typeof - унарный оператор проверки типа данных

*/

// Тернарные - условие
// <условие> ? "2" : "3"

/*
условные операторы

if ( <условие> ) {
    
} 
else if (<условие>) {

} 
else {

}
*/
// пример
if (NaN) {
    console.log('Истина');
}
else 
{
    console.log('Ложь');
}

/*
    0
    ''
    NaN
    null
    underfined
*/


/*
Конструкция свитч
switch (key) { // свитч
    case value: // если key === value
        //идём сюда
        break; // необходимо писать брейки потому что иначе JS будет выполнять всё снизу

    case value:
        break;
    default: // если key не попал не в один case, то выполянется дефолт
        break;
}
*/

switch (3) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break
    default:
        console.log(3);
        break;
}

//Циклы

for(let i = 0; i < 10; i++)
{
    if (i > 9) 
    {
        break;
    }
    if (i % 2 == 0) 
    {
        continue;
    }
    console.log(i);
}

/*
while (true){ // бесконечный цикл
    break;
}
*/

/*
способы задания переменных

let a; // в начале равна underfined
const b; - нельзя перезаписывать объект, но можно менять значения внутри коллекций. Должно быть чем-то
// пример
const v = [1, 2, 3];
v[1] = 4; >> [1, 4, 3]


var - не использовать
*/

let userName;
const CONSTANT = 2;

/*
считать ввод пользователя
*/ 
const input = prompt("Подсказка")
console.log(input);


// console.assert() -> проверка функции на что-то. Можно писать тесты себе на свои функции