/*eslint-env browser*/

var i;
var num = window.prompt("Enter an integer");

if (!isNaN(num)) {
    for (i = num; i >= 0; i--) {
        window.console.log(i);
    }
}
else {
    window.console.log("Enter a valid integer");
}

