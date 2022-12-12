var numerosGerais = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
var dezenas   = ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"];
var centenas  = ["cem", "duzentos", "trezentos", "quatrocentos", "quinhetos", "seiscentos","setescentos","oitocentos", "novecentos"];
var input     = document.querySelector('input[type=number]');

// Informa qual função irá chamar
function Extenso(numero){
    var retorno = "";
    
    console.log(numero);
    
    if (numero <= 99) {

        numeroDecimal(numero);
    }

    if (numero >= 100 && numero <= 999) {

        numeroCentenas(numero);
    }

    if (numero >= 1000 && numero <= 9999) {

        numeroMilhares(numero);
    }
    
    return retorno;
}

// identifica Número com "2 digitos" 
function numeroDecimal(numero) {

    const temp = numero.toString().split('');
    const primeiro_numero = temp[0];
    const segundo_numero = temp[1];

    let decimal = '';

    decimal = dezenas[primeiro_numero-1] 

    if (numero < 20){
        decimal = numerosGerais[numero];
    } else {

        if (segundo_numero > 0){

            let posicao = temp[0 + 1];

            decimal += " e " + numerosGerais[posicao];
        }
    }

    showNumber(decimal);
}

// Identifica número com "3 digitos"
function numeroCentenas(numero) {

    const temp = numero.toString().split('');
    const primeiro_numero = temp[0];
    const segundo_numero  = temp[1];
    const terceiro_numero = temp[2];
    let decimal;

    if (temp[1] > 0 && temp[2] >= 0) {
        decimal =  temp[1].concat(temp[2]);
    }

    let centena = '';

    centena = centenas[primeiro_numero-1];

    if (centenas[primeiro_numero-1] == "Cem") {
        centena = 'Cento';
    } 

    if (segundo_numero > 0){

        if (decimal > 20) {
            centena += " e " + dezenas[segundo_numero-1];
        }
    }

    if (terceiro_numero > 0){

        if (decimal > 20) {
            centena += " e " + numerosGerais[terceiro_numero];
        }
    }

    if (segundo_numero == 0) {
        
        if (terceiro_numero == 0 && centena == 'Cento'){
            centena = 'Cem'
        }

        if (terceiro_numero > 0) {
            centena += " e " + numerosGerais[terceiro_numero]
        }
    } 

    if (decimal < 20) {
        centena += ' e ' + numerosGerais[decimal];   
    }

    showNumber(centena);
}

// Identifica número com "4 digitos"
function numeroMilhares(numero) {
    const temp = numero.toString().split('');
    const primeiro_numero = temp[0];
    const segundo_numero  = temp[1];
    const terceiro_numero = temp[2];
    const quarto_numero   = temp[3];

    
    let mil = '';

    if (primeiro_numero == 0 || primeiro_numero == 1) {
        mil = 'mil';
    } else {
        mil = numerosGerais[primeiro_numero] + ' mil';
    }

    if (segundo_numero > 0){

        if (centenas[segundo_numero-1] == 'cem' && terceiro_numero >= 0) {
            mil += ' ' + 'cento';

        } else if (segundo_numero > 0 && terceiro_numero == 0 && quarto_numero == 0) {
            
            mil += ' e ' + centenas[segundo_numero-1];

        } else if (segundo_numero > 0 && terceiro_numero == 0 ){

            mil += ' ' + centenas[segundo_numero-1];

        } else {

            mil += ' ' + centenas[segundo_numero-1];
        }
    }

    if (terceiro_numero > 0 && quarto_numero == 0) {
        
        mil += ' e ' + dezenas[terceiro_numero-1];    
    }

    if (quarto_numero > 0 && terceiro_numero == 0) {

        let posicao = temp[2 + 1];

        mil += ' e ' + numerosGerais[posicao];
    }

    if (terceiro_numero > 0 && quarto_numero > 0) {

        let soma = terceiro_numero + quarto_numero;

        if (soma < 20){
    
            mil += ' e ' + numerosGerais[soma];

        } else {

            let posicao = temp[3];
    
            mil += ' e ' + dezenas[terceiro_numero-1] + ' e ' + numerosGerais[posicao];
        }
    }

    showNumber(mil);
}

// Envia número do input para a função "extenso"
function send(){
    let inputNumber = document.querySelector('input[type=number]').value;

    if (inputNumber > 9999) {

        AlertError();
    }

    Extenso(inputNumber);
}

// Mostra número em tela
function showNumber(returnNumber){
    var h1 = document.querySelector('h1');
    
    h1.innerText = returnNumber;

    console.log(h1);
}

// Mostra mensagem de erro
function AlertError() {

    let h1 = document.querySelector('h1');
    let messageError = 'Número maior que 9999';

    h1.innerText = messageError;
    h1.style.color = 'red'; 
    
    cleanInput(h1);
}

// Limpa input após erro
function cleanInput(h1){
    
    input.addEventListener('input', function(){
        h1.innerText = 'Seu número';  
        h1.style.color = 'white';
    });
}
