import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');

    function updateDisplay() {
        const item = stack.peek();
        display.innerHTML = item !== undefined ? item : 'n/a';
    }

    pop.addEventListener("click", function() {
        const item = stack.pop();
        if (item !== undefined) {
            alert("Tog bort " + item);
        } else {
            alert("Stacken är tom!");
        }
        updateDisplay();
    });

    push.addEventListener("click", function() {
        var x = prompt("Vad ska vi lägga på stacken?");
        if (x !== null) {  // Only push if user didn't cancel
            stack.push(x);
            updateDisplay();
        }
    });

    peek.addEventListener("click", function() {
        updateDisplay();
    });

    updateDisplay();
};