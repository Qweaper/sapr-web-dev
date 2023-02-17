function task_1(velosity, funcMode)
{
    let result;
    if(+funcMode === 1) // в метры
    {
        result = velosity * 1000 / 3600;
        console.log(`${velosity} км/ч соответсвтует ${result} м/с`);
        alert(`${velosity} км/ч соответсвтует ${result} м/с`);

    }
    else if (+funcMode === 0)
    {
        result = velosity * 3600 / 1000;
        console.log(`${velosity} м/с соответсвтует ${result} км/ч`);
        alert(`${velosity} м/с соответсвтует ${result} км/ч`);
    }
    else{
        alert('Такого режима нет')
    }
}


// let velosity = prompt('Введите скорость');
// let funcMode = prompt('0 - из м в км\n1 - из км в м');
// task_1(velosity, funcMode);

function task_2 (a, b, c)
{
    if (!isNaN(+a) && !isNaN(+b)  && !isNaN(+c) ) 
    {
        a = Number(a); 
        b = Number(b);
        c = Number(c);
        let square;
        let P;
        let relation;
        let p;
        if (!(a < (b + c) && b < (a + c) && c < (a + b)))
        {
            // console.log('Треугольника не существует');
            alert('Треугольника не существует');
        }
        else
        {
            P = a + b + c;
            p = P/2;
            let pa = p - a;
            let pb = p - b;
            let pc = p - c;
            square = Math.sqrt(p*pa*pb*pc);
            relation = P/square;
            // console.log("Треугольник существует");
            // console.log(`Периметр = ${P}`);
            // console.log(`Площадь = ${square}`);
            // console.log(`Соотношение = ${relation}`);
            alert("Треугольник существует");
            alert(`Периметр = ${P}`);
            alert(`Площадь = ${square}`);
            alert(`Соотношение = ${relation}`);
        }
    } else {
        console.log('неверные данные');
        alert('неверные данные');
    }
}


// let aA = prompt('введите сторону А');
// let bB = prompt('введите сторону Б');
// let cC = prompt('введите сторону В');

// task_2(aA, bB, cC);

function task_3(number)
{
    
    if (typeof(number) !== 'number') 
    {
        alert('Вы ввели не число');
    }
    else 
    {
        let word = ['buzz', 'fizz'];
        for(let i = 0; i <= number; i += 1)
        {
            if (i % 5 === 0 && i !== 0)
            {
                alert(`${i} fizz buzz`);
            }
            else
            {
                alert(`${i} ${word[i%2]}`);
            }
        }
    }
}

// let A = Number(prompt("Введите случайное число"));
// task_3(Number(A));


function task_4(num)
{
    if (typeof(num) !== 'number') 
    {
        alert('Вы ввели не число');
    }
    else 
    {
        let word = ['#', '*'];
        for(let i = 1; i <= num; i += 1)
        {
            alert(`${word[i%2].repeat(i)}`);
        }
        alert('||');
    }
}

// let A = Number(prompt("Введите случайное число"));
// alert(typeof A);
// task_4(A);

function task_5()
{
    let guess = Math.round(1 + Math.random() * 100);
    let number = Number(prompt('Введите загаданное число: '));
    if(typeof(number) !== 'number') {alert('Некорректные данные'); return;}
    while (number !== guess)
    {
        
        if (number > guess)
        {
            alert('ваше число больше');
        }
        else if (number < guess)
        {
            alert('ваше число меньше');            
        }
        number = Number(prompt('Введите загаданное число: '));
    }
    alert('угадано');
}

// task_5();

function task_6(n, x, y)
{
    if (typeof(n) !== 'number' || typeof(x) !== 'number' || typeof(y) !== 'number') 
    {
        alert('Некорректный ввод'); 
        return;
    }
    else if (x === 0 || y === 0)
    {
        alert('делить на ноль нельзя');
    }
    else 
    {
        if (n % x === 0 && n % y === 0)
        {
            alert(true);
            return;
        }
        else
        {
            alert(false);
            return;
        }
    }
}

// let n = Number(prompt('Введите n'));
// let a = Number(prompt('Введите a'));
// let b = Number(prompt('Введите b'));

// task_6(n, a, b);

function task_7(mounth)
{
    if (typeof(mounth) !== 'number')
    {
        alert('Вы ввели не число!');
        return;
    }
    if( 1 <= mounth && mounth <= 3) { alert('1 квартал'); return;}
    if( 4 <= mounth && mounth <= 6) {alert('2 квартал'); return;}
    if( 7 <= mounth && mounth <= 9) {alert('3 квартал'); return;}
    if( 10 <= mounth && mounth <= 12) {alert('4 квартал'); return;}
    alert('Ваше число выходит из диапазона от 1 до 12 включительно');
}

// task_7(0);
// task_7(1);
// task_7(2);
// task_7(3);
// task_7(4);
// task_7(5);
// task_7(6);
// task_7(7);
// task_7(8);
// task_7(9);
// task_7(10);
// task_7(11);
// task_7(12);
// task_7(13);
// task_7('abacaba')