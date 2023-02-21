const digits = document.querySelectorAll(".digit");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const clear = document.querySelector("#c");
const allClear = document.querySelector("#ac");
const backspace = document.querySelector("#backspace");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const dot = document.querySelector("#dot");
let currentOperator = "";
let value1 = "";

// EVENT LISTENERS

handleClickOnDigit = (e) =>{
    msg1.innerHTML += e.target.innerText;
}

handleOperator = (e) =>{
    if (!msg2.innerHTML){
    msg2.innerHTML = msg1.innerHTML;
    msg1.innerHTML = "";
    }
    
    if(!msg1.innerHTML){
        if (currentOperator){
            msg2.innerHTML = msg2.innerHTML.slice(0,msg2.innerHTML.length-1);
        }
    
        if(msg2.innerHTML){
            switch (e.target.innerHTML) {
                case "/":
                    currentOperator = "/";
                    msg2.innerHTML += "/";
                    break;
                case "x":
                    currentOperator = "x";
                    msg2.innerHTML += "x";
                    break;
                case "-":
                    currentOperator = "-";
                    msg2.innerHTML += "-";
                    break;
                case "+":
                    currentOperator = "+";
                    msg2.innerHTML += "+";
                    break;
                default:
                    break;
            }
        }
    }
}

handleClear = () =>{
    msg1.innerHTML = "";
}

handleAllClear = () =>{
    msg1.innerHTML = "";
    msg2.innerHTML = "";
    currentOperator = "";
}

handleBackspace = () =>{
    msg1.innerHTML = msg1.innerHTML.slice(0,msg1.innerHTML.length-1);
}

hadnleEquals = () =>{
    if(msg1.innerHTML && msg2.innerHTML){
        value1 = msg2.innerHTML.slice(0,msg2.innerHTML.length-1)
        switch (currentOperator) {
            case "/":
                msg1.innerHTML = Number(value1)/Number(msg1.innerHTML);
                msg2.innerHTML = "";
                break;
            case "x":
                msg1.innerHTML = Number(value1)*Number(msg1.innerHTML);
                msg2.innerHTML = "";
                break;
            case "-":
                msg1.innerHTML = Number(value1)-Number(msg1.innerHTML);
                msg2.innerHTML = "";
                break;
            case "+":
                msg1.innerHTML = Number(value1)+Number(msg1.innerHTML);
                msg2.innerHTML = "";
                break;
            default:
                break;
        }
        currentOperator = "";
    }
}

handleDot = (e) =>{
    if(!msg1.innerHTML.includes(".")){
        msg1.innerHTML += e.target.innerText;
    }
}

// ADDING EVENT LISTENERS

for (const button of digits) {
    button.addEventListener("click", handleClickOnDigit);
}

for (const button of operators) {
    button.addEventListener("click", handleOperator);
}

clear.addEventListener("click", handleClear);
allClear.addEventListener("click", handleAllClear);
backspace.addEventListener("click", handleBackspace);
equals.addEventListener("click", hadnleEquals);
dot.addEventListener("click", handleDot);