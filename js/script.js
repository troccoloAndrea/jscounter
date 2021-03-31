//variabili globali
var count = 0;
var counter;
var btnPlus;
var btnMinus;

//Chiama le funzioni per fare il render degli elementi e aggiungere gli event listener
window.onload = () =>{
        RenderButton("btnMinus", "-");        
        RenderCounter("lblCounter", "0")
        RenderButton("btnPlus", "+");
        GetElement();        
}

//Esegue il render dei bottoni
//Param
//id: id dell'elemento
//text: testo da inserire all'interno dell'elemento
function RenderButton(id, text){
    var button = document.createElement("BUTTON");
    var t = document.createTextNode(text);   
    button.appendChild(t);
    button.id = id;
    button.classList.add("btn");
    AppendElementToBox(button);
    
}

//Esegue il render della label del counter
//Param
//id: id dell'elemento
//text: testo da inserire all'interno dell'elemento
function RenderCounter(id, text){
    var label = document.createElement("SPAN");
    label.id = id;
    var t = document.createTextNode(text);
    label.appendChild(t);
    AppendElementToBox(label)

}

//Aggiunge al counter-box l'elemento passato come parametro
//Param
//element: elemento da inserire all'interno del box
function AppendElementToBox(element){
    var place = document.getElementById("counter-box");
    place.appendChild(element);
}

//Prende i riferimenti agli elementi all'interno del docuemento e aggiunge gli event listener necessari
function GetElement(){
    counter = document.getElementById("lblCounter");
    btnPlus = document.getElementById("btnPlus");
    btnMinus = document.getElementById("btnMinus");

    btnPlus.addEventListener("click", ()=>{
        count++;
        UptadeCounter();
    });
    btnMinus.addEventListener("click", () => {
        count--;
        UptadeCounter();
    });

}

//Aggiorna il counter con il valore della variabile globale
function UptadeCounter(){
    counter.innerHTML = count;
}

