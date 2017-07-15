/*
*Slider JS
*(7.12.2017)
*/

function Slider(elementId){
	var that = this;

	this.marginLeft = 0;
	this.intervalId;
	this.sliderLoop = false;

	this.pauseStatus = false;

	var element = document.getElementsByClassName(elementId)[0];
	var arwLeft = document.getElementsByClassName('arrow-left')[0];
	var arwRight = document.getElementsByClassName('arrow-right')[0];

	// var btns = document.getElementsByClassName('btn-image');
	var btns = document.querySelectorAll('.wrapper .nav-buttons .btn-image');

	// var btnPause = document.getElementsByClassName('pause')[0];
	// console.log(btns);

	// var imgDiv = element.getElementsByClassName('img-div')[0];
	// console.log(element);
	// console.log(arwRight);
	// console.log(arwLeft);

	this.init = function(){
		 // console.log(element);
		that.slide();
		that.addEvents();
	}

	this.init2 = function(){
		that.addEvents();
	}

	this.addEvents = function(){
		element.addEventListener('pointerenter',that.stop);
		element.addEventListener('pointerleave',that.slide);
		arwLeft.addEventListener('click', that.previous);
		arwRight.addEventListener('click', that.next);

		for(var i = 0; i < 5; i++){
      btns[i].addEventListener('click', function(i){
        return function() {
          that.btnClickEvent(i);
        }
      }(i));
    }
	}
	
	this.btnClickEvent = function( x){
    // debugger;
			that.marginLeft = -(x * 640);
			console.log(x);
			console.log(that.marginLeft);
			for(var i = 0; i < 5; i++){
				btns[i].style.background ='white';
			}
			btns[x].style.background ='green';
	}
	this.btnPauseClickEvent = function() {
		clearInterval(that.intervalId);
		// if(that.pause)
		//   that.pause = false;
		// else
		//   that.pause = true;
	}

	// this.slideStop = function(){
	// 	var count = 0;
	// 	that.pauseStatus = true;
	// 	var y = setTimeout(function(){
	// 		clearInterval(that.intervalId);
	// 	}, 20000);
	// 	// clearInterval(y);
	// 	that.slide();
	// }

	this.slide = function() {
		// if(that.pauseStatus)
		// 	return;

			that.intervalId = setInterval(function () {          
				element.style.marginLeft = that.marginLeft + "px";

				// for(var j= 0; j < 5; j++){
				// 	btns[j].style.background = 'white';
				// }
				if(that.marginLeft == 0 || that.marginLeft == 640 || that.marginLeft % 640 == 0){
					that.toStopSlide();	
				}

				// if(that.marginLeft == 0 || marginLeft == -640)
				// {
				// 	// debugger;
				// 	// console.log('hello world');s
				// 	// that.slideStop();
				// }
				// else 
				// {
				// 	for(var k =2; k < 5; k++){
				// 		if((that.marginLeft % 640) == -k)
				// 		{
				// 			// that.slideStop();
				// 		}
				// 	}
				// }

				for(var i =0; i <= 5; i++){
					if(that.marginLeft <= -(i * 640) && that.marginLeft > -(i +1) * 640){
						if(i != 5){
							// debugger;
							btns[i].style.background = 'green';
						}
						break;
					}
					else if(that.marginLeft == -(4) * 640){
						btns[4].style.background = 'green';
					}
				}
				// if(marginLeft)
				if(that.marginLeft == -(5*640)){
					// this.delay();
					// myLoop();
					that.sliderLoop = true;
				}
				else if(that.marginLeft == 0){
					that.sliderLoop = false;
				}
				if(that.sliderLoop)
					that.marginLeft = 0;
				else
					that.marginLeft -= 5;

				console.log(that.marginLeft);
			}, 1000 / 60);
	}
	this.toStopSlide = function(){
		clearInterval(that.intervalId);
		var to = setTimeout(function() {
			that.slide();
		}, 3000);
	}
	this.stop = function() {
		// if(!that.pause)
				clearInterval(that.intervalId);
	}

	this.next = function(){
		var boundMargin = -640 * 4;
		console.log(that.marginLeft);
		console.log(element);
		if(that.marginLeft <= boundMargin){
			return;
		}
		else{
			that.marginLeft -= 640;
			// that.marginLeft = that.marginLeft +"px";
		}
	}
	this.previous = function(){
		element.style.marginLeft = that.marginLeft;
		console.log(that.marginLeft);
		if(that.marginLeft >= 0){
			// console.log('the margin is zero');
			return;
		}
		else
		{
			that.marginLeft +=640;
			// that.marginLeft = that.marginLeft +"px";

		}
	}
	function myLoop() {           //  create a loop function
	 setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			alert('hello');          //  your code here
			i++;                     //  increment the counter
			if (i < 10) {            //  if the counter < 10, call the loop function
				 myLoop();             //  ..  again which will trigger another 
			}                        //  ..  setTimeout()
	 }, 3000);
	}
}


function Slider2(elementId){
	var that = this;
	var element = document.getElementsByClassName(elementId)[0];
	var arwLeft = document.getElementsByClassName('arrow-left')[1];
	var arwRight = document.getElementsByClassName('arrow-right')[1];

	var btns = document.querySelectorAll('.wrapper2 .nav-buttons .btn-image');
	// console.log(btns);

	this.marginLeft = 0;

	this.init = function() {
		// console.log(elementId + "some events are added");
		that.addEvents();
	}
	this.addEvents = function(){
		arwLeft.addEventListener('click', this.previous);
		arwRight.addEventListener('click',this.next);

		btns[0].addEventListener('click',function(){ });
	}

	this.previous = function(){
		element.style.marginLeft = that.marginLeft + "px";
		// console.log(element);
		if(that.marginLeft >= 0){
			// console.log('the margin is zero');
			return;
		}
		else
		{
			that.marginLeft +=640;
			// that.marginLeft = that.marginLeft +"px";

		}
	}
	this.next = function(){
		var boundMargin = -640 * 4;
		element.style.marginLeft = that.marginLeft + "px";   
		console.log(element);
		if(that.marginLeft <= boundMargin){
			return;
		}
		else{
			that.marginLeft -= 640;
			// that.marginLeft = that.marginLeft +"px";
		}
	}
	this.btnClickEvent = function(){
		alert("button clicked");
	}
}


var slider = new Slider('slider');
var slider2 = new Slider2('slider2');

slider.init();
slider2.init();