//FUNDET FIGUR 1, 2, 3, 4 - change image
function changeImage(){
	var silhouet = document.querySelector(".silhouetter");
	if (silhouet.src.match("img/figurer/ko.png")){
		silhouet.src = "img/figurer/koFarve.png";
	}
	else if (silhouet.src.match("img/figurer/broed.png")){
		silhouet.src = "img/figurer/broedFarve.png";
	}
	else if (silhouet.src.match("img/figurer/toiletpaper.png")){
		silhouet.src = "img/figurer/toiletpaperFarve.png";
	}
	else if (silhouet.src.match("img/figurer/hoene.png")){
		silhouet.src = "img/figurer/hoeneFarve.png";
	}
}

setTimeout(changeImage, 350);
/*
	//FUNDET FIGUR 1, 2, 3, 4 - change page
	function changePage(){
		location.replace("./oversigt.html")
	}

	setTimeout(changePage, 10000);
*/

/* OVERSIGT - cookies */
document.cookie = "path=/fundetfigur1.html";

//PRÆMIESIDE
function displayImage(){
	document.getElementById("gaveikon").classList.add("showing");
}
setTimeout(displayImage, 150);
