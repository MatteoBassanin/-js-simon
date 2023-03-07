let randomNumberArray = [];
multipleNumers ();
console.log("questp è quello che contine l'array" + randomNumberArray);
document.getElementById("showing_numbers").innerHTML = randomNumberArray;

function multipleNumers (){
    for(let i = 0 ; i < 5; i++){
        let randomNumber = generatingRanbdomnumbers (1, 100);
        
        randomNumberArray.push(randomNumber);         
    }
}

setTimeout(eraseContent,30000);

function eraseContent(){
    document.getElementById("showing_numbers").innerHTML = "";
}


function generatingRanbdomnumbers (min, max){
    const randomNumber = Math.floor(Math.random()*(max - min) + 1)+ min;
    console.log(randomNumber);
    return randomNumber;
}