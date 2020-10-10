/*eslint-env browser*/

var coinFlip;
var i;
for (i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());
    /*window.document.write("The flip was" + coinFlip + "<br>");*/
    if (coinFlip === 0) {
        window.console.log("Heads");
    }
    else {
        window.console.log("Tails");
    }
}