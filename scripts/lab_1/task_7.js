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

task_7(0);
task_7(1);
task_7(2);
task_7(3);
task_7(4);
task_7(5);
task_7(6);
task_7(7);
task_7(8);
task_7(9);
task_7(10);
task_7(11);
task_7(12);
task_7(13);
task_7('abacaba')