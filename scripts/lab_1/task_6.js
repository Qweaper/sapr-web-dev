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

let n = Number(prompt('Введите n'));
let a = Number(prompt('Введите a'));
let b = Number(prompt('Введите b'));

task_6(n, a, b);
