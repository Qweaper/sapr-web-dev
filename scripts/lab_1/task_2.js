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


let aA = prompt('введите сторону А');
let bB = prompt('введите сторону Б');
let cC = prompt('введите сторону В');

task_2(aA, bB, cC);

