/*eslint-env browser*/

var coinFlip = Math.round(Math.random() * 10);
var choice = window.prompt("Enter Heads or Tails");
/*window.document.write("The flip was" + coinFlip + "<br>");*/
if (choice == "Heads" || choice == "Tails") {
    if (coinFlip <= 5) {
        if (choice == "Heads") {
            window.document.write("The flip was heads and you chose heads...you win!");
        }
        else {
            window.document.write("The flip was heads and you chose tails...you lose!");
        }
    }
    else {
        if (choice == "Tails") {
            window.document.write("The flip was tails and you chose tails...you win!");
        }
        else {
            window.document.write("The flip was tails and you chose heads...you lose!");
        }
        
    }

}
else {
    window.document.write("Enter either Heads or Tails");
}
