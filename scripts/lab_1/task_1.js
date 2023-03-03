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


let velosity = prompt('Введите скорость');
let funcMode = prompt('0 - из м в км\n1 - из км в м');
task_1(velosity, funcMode);
