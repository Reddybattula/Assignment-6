/*eslint-env browser*/


var integer1 = parseInt(window.prompt("Enter first integer"), 10);
var integer2 = parseInt(window.prompt("Enter second integer"), 10);

if (!isNaN(integer1) && !isNaN(integer2)) {
    if (integer1 === integer2) {
        window.document.write("Both numbers are equal"); 
    }
    else {
            if (integer1 > integer2) {
            window.document.write("Larger integer is "+ integer1);    
        }
            else {
            window.document.write("Larger integer is "+ integer2);
        }
    }
}
else {
    window.document.write("Enter valid integer");    
}


