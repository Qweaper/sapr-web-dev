const absValue = function(x)
{
    if (typeof(x) !== "number") {
        alert('Некорректные данные');
        return;
    }
    x = Number(x);
    if (x < +0) {return -x}
    if (x === -0) {return +0}
    return x;
    
};

// alert(absValue(1))
// alert(absValue(2))
// alert(absValue(-4))
// alert(absValue(0))
// alert(absValue(-12))
// alert(absValue(-0))
// alert(absValue(+0))