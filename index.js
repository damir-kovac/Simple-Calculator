const digits = document.querySelectorAll(".digit");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const clear = document.querySelector("#c");
const allClear = document.querySelector("#ac");
const backspace = document.querySelector("#backspace");


// EVENT LISTENERS

handleClickOnDigit = (e) =>{
    msg1.innerHTML += e.target.innerText;
}

handleClear = () =>{
    msg1.innerHTML = "";
}

handleAllClear = () =>{
    msg1.innerHTML = "";
    msg2.innerHTML = "";
}

handleBackspace = () =>{
    msg1.innerHTML = msg1.innerHTML.slice(0,msg1.innerHTML.length-1);
}

// ADDING EVENT LISTENERS

for (const button of digits) {
    button.addEventListener("click", handleClickOnDigit);
}

clear.addEventListener("click", handleClear);
allClear.addEventListener("click", handleAllClear);
backspace.addEventListener("click", handleBackspace);