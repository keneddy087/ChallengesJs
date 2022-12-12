var list = [];
var listRow = document.querySelector('.row');

// Classe fila
class Row {

    constructor() {
        this.name; this.count = 0;
    }
    
    // Metodo de adicionar
    add(name){

        this.count++;

        list.push(name);

        console.log(list);

        addListRow(name);
    }   

    // Metodo de remover
    remove(){
        list.pop();

        console.log(list);

        removeListRow()
    }
}

// Adiciona a fila
function addRow(){
    var inputName = document.querySelector('input[type=text]').value;

    const row = new Row();

    row.add(inputName);
}

// Remove da fila
function removeRow(){
    const row = new Row();

    row.remove();
}

// Mostra fila em tela
function addListRow(name){
    const liRow = document.createElement("li");
    const pLi    = document.createElement("p");

    pLi.innerText = name;
    liRow.appendChild(pLi)
    listRow.appendChild(liRow);
}

// Remove primeiro item da fila
function removeListRow(){
    listRow.firstChild.remove();
}