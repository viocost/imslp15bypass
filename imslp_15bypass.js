	var a = document.getElementById("sm_dl_wait");
	if (a != undefined){
			var href = a.dataset["id"];
			var newDev = document.createElement("div");
			newDev.innerHTML = "<a href='" + href + "'>DOWNLOAD NOW</a>";

			document.getElementsByClassName('body')[0].getElementsByTagName("center")[0].replaceChild(newDev, a);


	}

