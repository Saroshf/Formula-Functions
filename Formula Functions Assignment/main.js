// Calculating Surface Area of Rectangular Prism
"use strict";

// Html Elements
let calcBtnEl = document.getElementById("calcbtn");
let lgthInEl = document.getElementById("length");
let wdthInEl = document.getElementById("width");
let hghtInEl = document.getElementById("height");
let calcAoutEl = document.getElementById("calcOut");

// Event Listeners
calcBtnEl.addEventListener("click", calcArea);

//Event Function
function calcArea() {
    // Input 
    let lgthval = +lgthInEl.value;
    let wdthval = +wdthInEl.value;
    let hghtval = +hghtInEl.value;

    // Process and Output
    calcAoutEl.innerHTML = rectprsmFormula(lgthval, wdthval, hghtval);
}

// Calculate and Return Surface Area of Rectangular Prism by Using the Height(h), Length(l), and Width(w)
function rectprsmFormula(l, w, h) {
    return (2 * l * w) + (2 * w * h) + (2 * l * h);
}