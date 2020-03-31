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

//txt += ko[info] + ", ";



//
//for (var i = 0, length = radios.length; i < length; i++) {
//    if (radios[i].checked) {
//        // do whatever you want with the checked radio
//        alert(radios[i].value);
//
//        // only one radio can be logically checked, don't check the rest
//        break;
//    }
//}
//
//	if (svar == ko.mulighed1){
//		txt = "Forkert";
//	} else{
//		txt = "Rigtigt";
//	}
