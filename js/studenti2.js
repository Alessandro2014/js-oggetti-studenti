/*
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente
inserendo nell’ordine: nome, cognome e età.
*/

var display = document.getElementById("display");

//ARRAY DI STUDENTI
var students = [
    {   nome : "David", 
        cognome : "Bianchi",
        eta : 20,
    }, 
    {   nome : "Arnaud", 
        cognome : "Noel",
        eta : 25,
    },
    {   nome : "Angelo",
        cognome : "Rossi",
        eta : 30,
    }, 
];

//AGGIUNTA NUOVO STUDENTE
var newName = prompt("Inserisci il tuo nome");
var newSurname = prompt("Inserisci il tuo cognome");
var newAge = prompt("Inserisci la tua età");

var newStudent = {
    nome : newName, 
    cognome :  newSurname,
    eta : newAge,
};
students.push(newStudent);

printObjectArray(students, display);

//FUNZIONE PRINT TO OBJET ARRAY
function printObjectArray(objectArray, targetElement){
    var content = " ";
for (var i = 0; i < objectArray.length; i++) {
    var currentItem = objectArray[i];
    content += "<li>";

    for (var key in currentItem) {
        content += 
        key + ": " + currentItem[key] + "<br>";
    }
    content += "</li>";
}
    targetElement.innerHTML = content;

}