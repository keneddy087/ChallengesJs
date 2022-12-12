var btnCalc = document.getElementById('btnCalc');

// Exceculta o calculo
function execulte(){

    let inputHeight = document.getElementById('inputHeight').value;
    let inputWeight = document.getElementById('inputWeight').value;
    
    calculate(inputHeight, inputWeight);
}

// Recebe parâmetros e realiza o calculo
function calculate(height, weight) {

    console.log('tese');

    if (isNaN(height) || isNaN(weight)) {
      
        alert('Favor verificar os números digitados');  
    };

    var calculateIMC = weight / (Math.pow(height,2));

    console.log(calculateIMC.toFixed(4));

    validateIMC(calculateIMC);
}

// Valida resultado do calculo e informa o IMC
function validateIMC(calculateIMC) {

    if(calculateIMC < 18.4) {
        
        console.log(calculateIMC + ' Abaixo do peso');

        showIMC(calculateIMC, 'Abaixo do peso');
    }

    if(calculateIMC >= 18.5 && 
       calculateIMC <= 24.9) {

        console.log(calculateIMC + ' Normal');

        showIMC(calculateIMC, 'Normal');
    }

    if(calculateIMC >= 25.1 && 
       calculateIMC <= 29.9) {
 
        console.log(calculateIMC + ' Acima do peso');

        showIMC(calculateIMC, 'Acima do peso');
    }

    if(calculateIMC > 30) {
  
        console.log(calculateIMC + ' Obeso');

        showIMC(calculateIMC, 'Obeso');
    }
};

// Mostra em tela
function showIMC(calculateIMC, resultsIMC) {
    
    console.log('--');
    let h1 = document.querySelector('h1');
    h1.innerHTML = calculateIMC.toFixed(4) + ' - ' + resultsIMC; 
}

