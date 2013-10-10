// JavaScript Document

//Funksjon som henter informasjonen fra ID "myList" for å printe rett språk til sjerm når valgt//
function programmingLanguages()
{
	//lager en funksjon og gir den verdi
var mylist=document.getElementById("myList");
// skriver funksjonen til Html-filen
document.getElementById("Languages").innerHTML = mylist.options[mylist.selectedIndex].text+".";
}

// funksjonen "myFunction" sender en alert popup melding til skjermen
function myFunction()
{	
	// meldingen som gis til skjerm
	alert ("Denne siden er under konstruksjon")
}