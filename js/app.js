
class Tamagotchi {
		constructor(name){
			this.legs = 4;
			this.hunger = 30 //Math.floor(Math.random() * 10) +1;
			this.sleepiness = 30 // Math.floor(Math.random() * 10) +1;
			this.boredom = 30 //Math.floor(Math.random() * 10) +1;
			this.name = name;
			this.age = 0;
			
		}
	}

const game = {

	time: 0,

	endGame: 30,

	newTom: null, 

	isAlive: true,



	createTamagotchi(name){
		this.newTom = new Tamagotchi(name);

		this.printStuff()
		this.startTimer();
	},

	printStuff() {
		$('.hunger').text('Hunger level: ').css('color', '#262626')
		$('.hunger').append(this.newTom.hunger)
		$('.sleepiness').text('Sleepiness level: ').css('color', '#262626')
		$('.sleepiness').append(this.newTom.sleepiness)
		$('.boredom').text('Boredom level: ').css('color', '#262626')
		$('.boredom').append(this.newTom.boredom)
		$('.timer').text('Kill timer: ').css('color', '#262626')
		$('.timer').append(this.newTom.time)
		$('.age').text('Age: ').css('color', '#262626')
		$('.age').append(this.newTom.age)

	},


	startTimer(){
		let $timer = $('.timer')

		let interval = setInterval (() => {
			this.animate();
			this.feedingTime();
			this.deadOfSleepiness();
			this.ageAmount();
			this.deadOfBoredom();

			if(this.time === this.endGame) {
				console.log('Your pet died, the timer ran out!');
				clearInterval(interval);
			} else if (!this.isAlive) {
				clearInterval(interval)
			} else {
				this.time += 1
			}

			//update the time on the DOM
			$timer.text(`Kill timer: ${this.time}s`)

		}, 500)

	},

	animate(){

		$("#in").click(function(){
   	 	$("img").animate({
      		width: '200px',
      		height: '200px',
      		opacity: '0.5'
    		}, 2000);
  		});
  		$('#in').click(function(){
  			$('img').animate({
  				height: '400',
  				width: '500',
  				opacity: '1.0'
  			}, 2000)
  		});
	},

	feedingTime(feed){
		if(this.time % 2 === 0){

			this.newTom.hunger -= 1

		} else if(this.newTom.hunger === 0){
			console.log('Your pet died of hunger!');
			this.died();
		}
	},

	deadOfSleepiness(){
		
		if(this.newTom.sleepiness === 0) {
			console.log('Your pet died of exhaustion!');
			this.died();
		}

		if(this.time % 5 === 0 && this.time > 0){
			this.newTom.sleepiness -= 1


		} 
	},

	ageAmount(){
		if(this.time % 3 === 0){
			this.newTom.age += 1;
			this.printStuff();
		} else if(this.newTom.age === 5){
			$('img').attr('class', 'picture').animate({height: '200', width: '700'}, 2000)
		} else if(this.newTom.age === 10){
			$('img').attr('class', 'picture').animate({height: '450', width: '200'}, 2000)
		}
		else if(this.age === 0){
			console.log('Your pet died!');
			this.died()
		}
	},

	deadOfBoredom(){
		
		if(this.time % 4 === 0){
			this.newTom.boredom -= 1;
			this.printStuff();
		} else if(this.newTom.boredom === 0){
			console.log('Your pet died of boredom!');
			this.died();
		}

	},
	// setTimeout( increase(){

	// })

	died(){
		// console.log('Your pet died!');
		this.isAlive = false
	}
};

// Event listeners --------------------------

$('form').on('submit',(event) => {
	event.preventDefault();
	const input = $('#input-box').val()
	game.createTamagotchi(input);

})

$('.feed').on('click', (e) => {
	let $hunger = $('.hunger') 
	$hunger.text('Hunger level: ' + (game.newTom.hunger += 1));
})

$('.lightOff').on('click', (e) => {
	let $light = $('.sleepiness')
	$light.text('Sleepiness level: ' + (game.newTom.sleepiness += 1));

	// let $img = $('img');
	// $img.css('background-color', 'black')

})

$('.play').on('click', (e) => {
	let $boredom = $('.boredom')
	$boredom.text('Boredom level: ' + (game.newTom.boredom += 1));
})


