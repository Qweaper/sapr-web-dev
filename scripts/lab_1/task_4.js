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

let A = Number(prompt("Введите случайное число"));
alert(typeof A);
task_4(A);
