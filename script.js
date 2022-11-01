const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// }

clipboardEl.addEventListener('click', () => {
    let copyText = resultEl.innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
    
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    resultEl.innerHTML = generatePassword(length);  
})

function generatePassword( length) {
    
    if (lowercaseEl.checked == 1){
         val1 = getRandomLower();
    }else{
        val1 = "";
    }

    if (uppercaseEl.checked == 1){
        val2 = getRandomUpper();
    }else{
        val2 = "";
    }
    
    if (numbersEl.checked == 1){
        val3 = getRandomNumber();
    }else{
        val3 = "";
    }
    
    if (symbolsEl.checked == 1){
        val4 = getRandomSymbol();
    }else{
        val4 = "";
    }
    
    let result = val1 + val2 + val3 + val4;
    let finalVal = "";
    for(i=0; i< length; i++){
        finalVal = finalVal + result[Math.floor(Math.random()* result.length)]
    }
    return finalVal;
}

function getRandomLower() {
    let val = "abcdefghijklmnopqrstuvwxyz";
    let value1 = "";
    for(i=0;i<26;i++){
        value1 = value1 + val[Math.floor(Math.random()*val.length)];
    }
    return value1;
}

function getRandomUpper() {
    let val = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let value2 = "";
    for(i=0;i<26;i++){
        value2 = value2 + val[Math.floor(Math.random()*val.length)];
    }
    return value2;
}

function getRandomNumber() {
    let val = "0123456789";
    let value3 = "";
    for(i=0;i<10;i++){
        value3 = value3 + val[Math.floor(Math.random()*val.length)];
    }
    return value3;
}

function getRandomSymbol() {
    const val = "!@#$%^&*?";
    let value4 = "";
    for(i=0;i<9;i++){
        value4 = value4 + val[Math.floor(Math.random()*val.length)];
    }
    return value4;
}