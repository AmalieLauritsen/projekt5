//FUNDET FIGUR 1, 2, 3, 4
// 1 skift IMG
function changeImage(){
	document.getElementById("silhouet1").src = "img/figurer/koFarve.png";
}

setTimeout(changeImage, 500);

// 2 skift IMG
function changeImage(){
	document.getElementById("silhouet2").src = "img/figurer/broedFarve.png";
}

setTimeout(changeImage, 500);

// 4 skift IMG
function changeImage(){
	document.getElementById("silhouet3").src = "img/figurer/toiletpaperFarve.png";
}

setTimeout(changeImage, 500);

// 4 skift IMG
function changeImage(){
	document.getElementById("silhouet3").src = "img/figurer/hoeneFarve.png";
}

setTimeout(changeImage, 500);

// 1, 2, 3, 4 skift page
	function changePage(){
		location.replace("./oversigt.html")
	}

	setTimeout(changePage, 5000);

//PRÆMIESIDE
function displayImage(){
	document.getElementById("gaveikon").classList.add("showing");
}

setTimeout(displayImage, 150);
