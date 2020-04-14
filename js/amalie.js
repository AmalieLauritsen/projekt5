//FUNDET FIGUR 1, 2, 3, 4 - change image
function changeImage(){
	var silhouet = document.querySelector(".silhouetter");
	if (silhouet.src.match("img/figurer/ko.png")){
		silhouet.src = "img/figurer/koFarve.png";
	} else if (silhouet.src.match("img/figurer/broed.png")){
		silhouet.src = "img/figurer/broedFarve.png";
	} else if (silhouet.src.match("img/figurer/toiletpaper.png")){
		silhouet.src = "img/figurer/toiletpaperFarve.png";
	} else if (silhouet.src.match("img/figurer/hoene.png")){
		silhouet.src = "img/figurer/hoeneFarve.png";
	}
}

setTimeout(changeImage, 350);

//FUNDET FIGUR 1, 2, 3, 4 - change page
	function changePage(){
		setTimeout(function() {
			location.replace("./oversigt.html");
		}, 10000);
	}

/* OVERSIGT - localStorage */
function checkImages(){
	if (localStorage.getItem("fundet1") != null) {
		document.getElementById("overbil1").src = localStorage.getItem("fundet1");
	}
	if (localStorage.getItem("fundet2") != null) {
		document.getElementById("overbil2").src = localStorage.getItem("fundet2");
	}
	if (localStorage.getItem("fundet3") != null) {
		document.getElementById("overbil3").src = localStorage.getItem("fundet3");
	}
	if (localStorage.getItem("fundet4") != null) {
		document.getElementById("overbil4").src = localStorage.getItem("fundet4");
	}
}

//PRÆMIESIDE
function displayGift(){
	document.getElementById("gaveikon").classList.add("showing");
}

setTimeout(displayGift, 150)
