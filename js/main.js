let randomNumberArray = [];
let checkNumber;
let validNumbersArray = [];


multipleNumbers();


console.log("questp è quello che contine l'array" + randomNumberArray);
document.getElementById("showing_numbers").innerHTML = randomNumberArray;




function multipleNumbers(){
    for(let i = 0 ; i < 5; i++){
        let randomNumber = generatingRanbdomnumbers (1, 100);
        
        randomNumberArray.push(randomNumber);         
    }
}

setTimeout(eraseContent,3000);

function eraseContent(){
    document.getElementById("showing_numbers").innerHTML = "";
    askNumbers();
    checkValidNumbers();

    alert("Hai indovinato" + validNumbersArray.length + " e i numeri sono" + validNumbersArray);
    
}


function generatingRanbdomnumbers (min, max){
    const randomNumber = Math.floor(Math.random()*(max - min) + 1)+ min;
    console.log(randomNumber);
    return randomNumber;
}

function askNumbers(){
    for(let i = 0 ; i < 5; i++){
         let checkNumber = prompt("inserisci i numeri visualizzati prima");
         checkValidNumbers(checkNumber);
    }
}

function checkValidNumbers(number){
    if (randomNumberArray.includes(parseInt(number)) ){
        console.log('number prompt ', number);
        validNumbersArray.push(number);
        console.log('arrayvalidNumber ',validNumbersArray);
    }
}