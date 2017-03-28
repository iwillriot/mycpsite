window.onload = function() { /*the js code is loaded when the window object is loaded.*/
	document.getElementById('btn').onclick = function() { /*this code is just chillin waiting for it to get triggered.*/
		document.getElementById('text').innerHTML = "...it was because we needed window.load"; /*and this is loaded when */
	}
}