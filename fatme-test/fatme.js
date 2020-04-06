//Dette er Fatmes Javascript fil


/* [THE "DATABASE" - QUESTIONS, OPTIONS, ANSWERS] */
// An array that contains objects
// In the format of {q: QUESTION, o: OPTIONS, a: CORRECT ANSWER}


//Dette er et array
//var ko = { mulighed1:"gulerod", mulighed2:"maelk"};

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

var milk = document.getElementById("div1");
var carrot = document.getElementById("div2");
var correctCow = document.getElementById("div3");

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("correct", ev.target.id);

}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("correct");
  ev.target.appendChild(document.getElementById(data));
	if(data == "milk"){
		document.getElementById("correct").style.visibility = "visible";
	} else if (data != "milk"){
		document.getElementById("wrong").style.visibility = "visible"
	}


}
