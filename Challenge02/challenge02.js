var arrayNumbers = [];
var findNumber   = document.getElementById('findNumber');


// Adiciono ao array
function add(){
    var inputNumber = document.getElementById('addNumber').value;

    arrayNumbers.push(inputNumber);

    document.getElementById('addNumber').value = '';

    console.log(arrayNumbers);
}

// Envio números digitado para função realizar a busca
findNumber.addEventListener('click', function (){

    var typedNumber  =  document.getElementById('num').value;
    console.log(typedNumber);
    search(arrayNumbers, typedNumber);
});

// Realizo a busca
function search(arrayNumbers, typedNumber) {

    let message = '';
 
    if(arrayNumbers.indexOf(typedNumber)>=0) {
    
        message = 'Está no índice ' + arrayNumbers.indexOf(typedNumber);

        console.log("Está no índice "+arrayNumbers.indexOf(typedNumber));

        returnArray(message);
    } else {

        message = 'Não está no array';
        console.log("Não está no array");

        returnArray(message);
    }
}

// Mostro resultado em tela
function returnArray(message){
    let h1 = document.querySelector('h1');

    h1.innerText = message;
}