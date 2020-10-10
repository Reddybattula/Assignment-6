/*eslint-env browser*/

var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    /*window.document.write("The flip was" + coinFlip + "<br>");*/
    if (coinFlip === 0) {
        window.console.log("Heads");
    }
    else {
            window.console.log("Tails");
    }
} while (coinFlip === 0);