var list = [];
var listStack = document.querySelector('.stack');

// Classe pilha
class Stack {

    constructor() {
        this.name; this.count = 0;
    }
    
    // Metodo para adicionar
    add(name){

        this.count++;

        list.push(name);

        console.log(list);

        addListStack(name);
    }   

    // Metodo para remover
    remove(){
        list.pop();

        console.log(list);

        removeListStack()
    }
}

// Adiciona a pilha
function addStack(){
    var inputName = document.querySelector('input[type=text]').value;

    const stack = new Stack();

    stack.add(inputName);
}

// Remove da pilha
function removeStack(){
    const stack = new Stack();

    stack.remove();
}

// Mostra pilha em tela
function addListStack(name){
    const liStack = document.createElement("li");
    const pLi    = document.createElement("p");

    pLi.innerText = name;
    liStack.appendChild(pLi)
    listStack.appendChild(liStack);
}

// Remove ultimo item da pilha
function removeListStack(){
    listStack.lastChild.remove();
}