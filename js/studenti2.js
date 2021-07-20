/*
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente
inserendo nell’ordine: nome, cognome e età.
*/

var display = document.getElementById("student-2");

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
/* 
var newStudent = {
    nome : "Joel", 
    cognome :  "Bougna",
    eta : 20
};

students.push(newStudent);
*/
var content = " ";
for ( var i = 0; i < students.lenght; i++) {
    var singleStudent = students[i];
    content += "<li>";

    for (var key in singleStudent) {
        content += 
        key + ": " + singleStudent[key] + "<br>";
    }
    content += "</li>";
}
display.innerHTML = content;


/*

for ( var i = 0; i < students.lenght; i++) {
    var student = students[i];
    console.log(" nome " + student[i]);


    var currentClass = student.students;

    for (var j = 0; j < currentClass.lenght; j++){
        var currentStudent = currentClass[j];
        for ( var key in currentStudent) {
    
            console.log(key);
        }
        
    }
}
*/