/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto. */

var student = document.getElementById("student");

var students = {
    name : "Federico",
    surname : "Bizzotto",
    age : 20
};

for ( var key in students) {
    
    console.log(students[key]);
}

