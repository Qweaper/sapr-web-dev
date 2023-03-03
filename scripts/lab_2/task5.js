const sampleArray = (obj, numOfNumbers) => 
    {
        if (typeof(numOfNumbers) !== 'number') 
        {   
            alert('вы ввели не число');
            return;
        }
        if (typeof (obj) !== 'object') 
        {
            alert('вы ввели не объект');
        }
        let index = 0;
        let props = Object.keys(obj);
        let res = []
        for (let i = 0; i < numOfNumbers; i+=1)
        {
            
            index = (Math.random() * 10);
            res.push(obj[props[Math.round(index) % obj.length]]);
        }
        return res;
    }

// alert(sampleArray([1,2,3,4], 2))// -> [3, 4]
// alert(sampleArray([1,2,3,4], 3))// -> [2, 2, 1]
// alert(sampleArray([1,2,3,4], 1))// -> [2, 2, 1]
// alert(sampleArray([1,2,3,4], -2))// -> [2, 2, 1]
// alert(sampleArray([1,2,3,4], 34))// -> [2, 2, 1]
// alert(sampleArray([1,2,3,4], 0))// -> [2, 2, 1]
