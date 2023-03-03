const randomNumber = (min, max) => 
    {
        if (typeof(min) !== 'number' || typeof(max) !== 'number')
        {
            return "Input data is not a number!";
        }
        else
        {
            min = Number(min);
            max = Number(max);
            return (min + Math.round(Math.random()*absValue(max-min))) % max;
        }
    };

alert(randomNumber(-100, 100)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))
alert(randomNumber(0, 10)) 
alert(randomNumber(-10, 10))