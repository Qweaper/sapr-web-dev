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

task_5();
