"use strict";


var nm = prompt("What is your name");
alert("welcome to lab02 website "+nm);

var mood = prompt("Are you happy ? ").toLowerCase();

console.log(mood);
console.log(mood.toLowerCase());
console.log(mood.toUpperCase());
switch (mood) {
    case "yes":
    case "y":
        alert("That is amazing");
        break;
    case "no":
    case "n":
        alert("I hope you will be happy in the future");
        break;

}




var softwaredevoloper = prompt("Are you a software devoloper ? ").toLowerCase();
console.log(softwaredevoloper);
console.log(softwaredevoloper.toLowerCase());
console.log(softwaredevoloper.toUpperCase());
switch (softwaredevoloper) {
    case "yes":
    case "y":
        alert("That is amazing mee too");
        break;
    case "no":
    case "n":
        alert("you should learn software devolopment");
        break;

}



var Nationality = prompt("Are you Jodanian?").toLowerCase();
console.log(Nationality);
console.log(Nationality.toLowerCase());
console.log(Nationality.toUpperCase());
switch (Nationality) {
    case "yes":
    case "y":
        alert("amazing me too");
        break;
    case "no":
    case "n":
        alert("welcome to jordan");
        break;

}



var language = prompt("Do you speak arabic?").toLowerCase();


console.log(language);
console.log(language.toLowerCase());
console.log(language.toUpperCase());
switch (language) {
    case "yes":
    case "y":
        alert("amazing me too");
        break;
    case "no":
    case "n":
        alert("you should learn the arabic language");
        break;

}


var Residence = prompt("Do you live in Jordan?").toLowerCase();
console.log(Residence);
console.log(Residence.toLowerCase());
console.log(Residence.toUpperCase());
switch (Residence) {
    case "yes":
    case "y":
        alert("amazing me too");
        break;
    case "no":
    case "n":
        alert("you should visit jordan");
        break;

}

alert("Tank you for answering the queations "+nm);