let randomNumberArray = [];
let checkNumbers;
let validNumbersArray = [];


multipleNumers ();


console.log("questp è quello che contine l'array" + randomNumberArray);
document.getElementById("showing_numbers").innerHTML = randomNumberArray;




function multipleNumers (){
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

    alert("Hai indovinato" + validNumbersArray.length);
    
}


function generatingRanbdomnumbers (min, max){
    const randomNumber = Math.floor(Math.random()*(max - min) + 1)+ min;
    console.log(randomNumber);
    return randomNumber;
}

function askNumbers(){
    for(let i = 0 ; i < 5; i++){
         checkNumbers = prompt("inserisci i numeri visualizzati prima");
         console.log("questi sono i numeri di checknumbers" + checkNumbers);
                 
    }
}

function checkValidNumbers(){

    // individuare se i numeri sono corretti
    // quanti e quali sono
    // let validNumberCheck = false

 

    for (let i = 0; i < randomNumberArray.length; i++) {
        if (randomNumberArray.includes(checkNumbers) ){
            console.log(checkNumbers);
            console.log(validNumbersArray);
            validNumbersArray.push(checkNumbers);
        }

    }
    
}