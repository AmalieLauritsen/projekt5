//FUNDET FIGUR 1, 2, 3, 4
/*function changeImage(){
	document.getElementById("silhouet1").src = "img/figurer/koFarve.png";
	document.getElementById("silhouet2").src = "img/figurer/broedFarve.png";
	document.getElementById("silhouet3").src = "img/figurer/toiletpaparFarve.png";
	document.getElementById("silhouet4").src = "img/figurer/hoeneFarve.png";
}

setTimeout(changeImage, 1000);*/


function changeImage(){
	var silhouet =	document.getElementsbyClassName("silhouetter");
	if (silhouet.src.match("img/figurer/ko.png")){
		silhouet.src = "img/figurer/koFarve.png";
	}
	else if (silhouet.src.match("img/figurer/broed.png")){
		silhouet.src = "img/figurer/broedFarve";
	}
	else if (silhouet.src.match("img/figurer/toiletpaper.png")){
		silhouet.src = "img/figurer/toiletpaperFarve";
	}
	else if (silhouet.src.match("img/figurer/hoene.png")){
		silhouet.src = "img/figurer/hoeneFarve";
	}
}

setTimeout(changeImage, 1000);



	// 1, 2, 3, 4 skift page
	/*
	function changePage(){
		location.replace("./oversigt.html")
	}

	setTimeout(changePage, 10000);
*/

/*
//PRÆMIESIDE
function displayImage(){
	document.getElementById("gaveikon").classList.add("showing");
}
setTimeout(displayImage, 150);
*/
