(function(){
	"use strict"
 var missions = ["Conquer Asia and South America",
								 "Conquer North America and Africa",
								 "Conquer Asia and Africa",
								 "Conquer North America and Australia",
								 "Conquer Europe and South America and a 3rd continent of your choice",
								 "Conquer Europe and Australia and a 3rd continent of your choice",
								 "Destroy the red",
								 "Destroy the yellow",
								 "Destroy the blue",
								 "Destroy the green",
								 "Destroy the grey",
								 "Conquer 24 territories of your choice",
								 "Conquer 18 territories with 2 soldier min in each ter"
								];

var missionSelect =[];

// cashing the dom
	var button = document.getElementById("submit");
	var numPlayers = document.getElementById("numPlayers");
	var formNumPlayer = document.getElementById("formNumPlayer");
	var container =document.querySelector(".sub-container");

	var toggleButton =document.querySelector(".btn-primary");

// 	initialize risk
	function init(){
	countPlayer();
	render();
	button.removeEventListener("click", buttonClick);
}

// 	creating dynamic html elements

function createElement(element,classme, player,idme){
	var myElement = document.createElement(element);
	myElement.setAttribute("class",classme);
	if(idme){
	myElement.setAttribute("id",idme);
	}
	if(player){
	myElement.textContent = player;
		}
	return myElement;
}


// get the number of players
function countPlayer(){
	var valNum = numPlayers.value;
	return valNum;
}

// 	rendering the html elements to the dom
function render(){
	var myAray = missions;
	for (  var i=0; i < countPlayer() ; i++ ){
		var randomNumber = (Math.floor(Math.random()*myAray.length));
		var toggleButton = createElement("button","btn-primary btn animated fadeIn", "Player "+(i+1),"btn"+i);
		var missionContainer = createElement("div","mission-container animated fadeIn");
		toggleButton.addEventListener("click",toggleMission);
		missionSelect.push(myAray[randomNumber]);
		myAray.splice(randomNumber,1);
		var yourMission= createElement("p","lead is-visible",missionSelect[i],"p"+i);
				container.appendChild(missionContainer);
				missionContainer.appendChild(toggleButton);
				missionContainer.appendChild(yourMission);
	}
}
	function toggleMission(){
	$(this).toggleClass("button-clicked")
	$(this).next().toggleClass("animated bounce is-visible");

	}
//  adding event listeners to the toggle buttons
		button.addEventListener("click",buttonClick);


function buttonClick(e){
	e.preventDefault();
	 smoothScroll();
	init();
}
function smoothScroll(){
	$('html, body').animate({
        scrollTop: $("#target").offset().top
    }, 1000);
}

})();
