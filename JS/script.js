	function funkcja(elementId){
		var x = document.getElementById(elementId);
		if (x.style.display === "none"){
			x.style.display = "";
		} else {
			x.style.display = "none";
		}
	}
	function hide (){
		var x = document.getElementsByClassName('hidable');
			 for (i=0; i<x.length; i++){
				x[i].style.display = "none"; 
			}
			
	}