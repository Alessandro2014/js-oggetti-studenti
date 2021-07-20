/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in
tutte le proprietà dell'oggetto. */

var student = document.getElementById("student");

var students = {
    Name : "Federico",
    Surname : "Rossi",
    Age : 20
};

var content = " ";
for (var key in students) {
    content += 
    "<li>" + key + ": " + students[key] + "</li>";
}

student.innerHTML += content;
