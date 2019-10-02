
class Tamagotchi {
		constructor(name){
			this.legs = 4;
			this.hunger = Math.floor(Math.random() * 10) +1;
			this.sleepiness = Math.floor(Math.random() * 10) +1;
			this.boredom = Math.floor(Math.random() * 10) +1;
			this.name = name;
			this.age = 0;
			
		}
	}



const game = {

	time: 0,

	endGame: 20,

	newTom: null, 

	isAlive: true,


	createTamagotchi(name){
		this.newTom = new Tamagotchi(name);
		console.log(this.newTom);


		$('.hunger').text('Hunger level: ')
		$('.hunger').append(this.newTom.hunger)
		$('.sleepiness').text('Sleepiness level: ')
		$('.sleepiness').append(this.newTom.sleepiness)
		$('.boredom').text('Boredom level: ')
		$('.boredom').append(this.newTom.boredom)
		$('.timer').text('Timer: ')
		$('.timer').append(this.newTom.time)

		game.startTimer();
	},


	startTimer(){
		let $timer = $('.timer')

		let interval = setInterval (() => {
			if(this.time === this.endGame ){
				clearInterval(interval);
			} else if (!this.isAlive) {
				clearInterval(interval)
			} else {
				this.time += 1
				// this.age += 1
			}
			this.feedingTime();
			this.lightsOut();
			//update the time on the DOM
			$timer.text(`Timer: ${this.time}s`)
		}, 1000)

	},


	feedingTime(feed){
		if(this.time % 2 === 0){
			console.log('Feed me!');
			let $hunger = $('.hunger')
			$hunger.text('Hunger level: ' + (this.newTom.hunger -= 1));
			console.log(this.newTom.hunger);
		} else if(this.newTom.hunger === 0){
			this.died();

		}

	},

	lightsOut(){
		if(this.time % 3 === 0){
			console.log('I am tired!');
			let $light = $('.sleepiness');
			$light.text('Sleepiness level: ' + (this.newTom.sleepiness -= 1))
			console.log(this.newTom.sleepiness);
		} else if (this.newTom.sleepiness === 0){
			this.died();
		}
	},

	// lightsOn(){
	// 	if(this.time % 3 === 0){
	// 		console.log('I am tired!');
	// 		let $light = $('.sleepiness');
	// 		$light.text('Sleepiness level: ' + (this.newTom.sleepiness -= 1))
	// 		console.log(this.newTom.sleepiness);
	// 	} else if (this.newTom.sleepiness === 0){
	// 		this.died();
	// 	}
		// to help his sleepiness level. When you turn the light out his level will go down 

	// play(){

	// },

	died(){
		if(this.newTom.hunger === 0 || this.newTom.sleepiness === 0 || this.newTom.boredom === 0){
			console.log('Your pet died!');
			this.newTom.time = 0
			
		}
		this.isAlive = false
	}
};

// Event listeners --------------------------

$('form').on('submit',(event) => {
	event.preventDefault();
	const input = $('#input-box').val()
	game.createTamagotchi(input);
	// input.hide();
})
$('.feed').on('click', (e) => {
	console.log('button works!');
	let $hunger = $('.hunger') 
	$hunger.text('Hunger level: ' + (game.newTom.hunger += 1));
})
$('.lightOff').on('click', (e) => {
	console.log('button works');
	let $light = $('.sleepiness')
	$light.text('Sleepiness level: ' + (game.newTom.sleepiness += 1));
	let $img = $('img');
	$img.css('background-color', 'black')
})
$('.lightOn').on('click', (e) => {
	console.log('button works');
	// let $light = $('.sleepiness')
	// $light.text('Sleepiness level: ' + (game.newTom.sleepiness += 1));
	let $img = $('img');
	$img.css('background-color', 'lightgreen')
})

