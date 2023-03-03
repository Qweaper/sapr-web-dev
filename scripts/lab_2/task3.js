const objectInfo = function(obj) 
{
    let propStr = Object.keys(obj).join(', ');
    alert(`Список своств: ${propStr}`);
    if (Object.hasOwn(obj,'group') && Object.hasOwn(obj,'last_name') && Object.hasOwn(obj,'first_name')) 
    {
        alert(`Студент ${obj.first_name} ${obj.last_name} учится в ${obj.group} группе`);
        return;
    }
    alert('Не хватает данных для корректного вывода');
    return;
};

// let student = {
// group: 201,
// last_name: "Иванов",
// first_name: "Иван"
// };
// objectInfo(student);
