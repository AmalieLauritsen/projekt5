/*
//Dette er Fatmes Javascript fil

var svar = "maelk";

var txt = "";

var info;
var radios = document.getElementsByName('koMuligheder');

	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].value == svar) {
			// do whatever you want with the checked radio
			txt = "Rigtigt";
		} else {
			txt = "Forkert";
		}
			// only one radio can be logically checked, don't check the rest
			break;
	}

document.getElementById("demo").innerHTML = txt;

var milk = document.getElementById("mulighed1");
var carrot = document.getElementById("mulighed2");
*/


//Start

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("correct", ev.target.id);

}

//Tekke rigtige og forkerte svar
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("correct");
  ev.target.appendChild(document.getElementById(data));
	if(data == "milk"){
		document.getElementById("correct").style.visibility = "visible";
		
	} else if (data != "milk"){
		document.getElementById("wrong").style.visibility = "visible"
		//Opdater siden så man kan prøve igen - forsinkelse på 1 sekund
		setTimeout(function(){location.reload()}, 1000);
	}
}

























