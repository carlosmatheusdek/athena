	/*if($("#randroidcontainer").scrollLeft() <= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "hidden";
	}

	if($("#randroidcontainer").scrollLeft() >= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "hidden";
	}

	if($("#randroidcontainer").scrollLeft() >= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "visible";
	}

	if($("#randroidcontainer").scrollLeft() <= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "visible";
	}*/

function scrollToRight(a){
	$(a).animate({scrollLeft:'+=200'}, 500);

	/*if($("#randroidcontainer").scrollLeft() >= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "visible";
	}

	if($("#randroidcontainer").scrollLeft() >= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "hidden";
	}
	alert($("#randroidcontainer").scrollLeft());*/
}

function scrollToLeft(a){
	$(a).animate({scrollLeft:'-=200'}, 500);
/*
	if($("#randroidcontainer").scrollLeft() <= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "visible";
	}

	if($("#randroidcontainer").scrollLeft() <= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "hidden";
	}
	alert($("#randroidcontainer").scrollLeft());*/
}

function baixarRepo(){
	 window.open('https://drive.google.com/u/0/uc?export=download&confirm=fYSL&id=1E054Z1ACcGm6jnCpyfQzlr5DpsegoNcY', '_blank');
}