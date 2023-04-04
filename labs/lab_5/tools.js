let data = {'comments': [], 'user-agent-stats': {}}

function genTable(arr) {
    let table = '<table>';
    for (const key in arr) {
        if (Object.hasOwnProperty.call(arr, key)) {
            table += `<tr><td style='border: solid 1px #000'>${key}</td><td style='border: solid 1px #000'>${arr[key]}</td></tr> `
        }
    }
    table += '</table>'
    return table
}



module.exports = {
    genTable,
    data    
};

