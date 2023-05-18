const { start } = require("repl");

module.exports = async function (request, showSpinner, hideSpinner) {
    let startTime = Date.now();
    const result = request();
    result.then(() => {
        let endTime = Date.now();
        let delta = endTime - startTime;
        if (delta > 250) {
            startTime = Date.now();
            setTimeout(hideSpinner(), 1000)
            showSpinner();  
        }
    })
} 