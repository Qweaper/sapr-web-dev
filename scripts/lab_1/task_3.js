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

let A = Number(prompt("Введите случайное число"));
task_3(Number(A));