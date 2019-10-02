
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

	endGame: 10,

	newTom: null, 

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
			} else {
				this.time += 1
			}

			this.feedingTime();



			//update the time on the DOM
			$timer.text(`Timer: ${this.time}s`)
		}, 1000)

	},

	// create a feeding function. This will be used with an on.click() method down below, outside of the game. Everytime it's clicked the Tomagotchi's hungar level will go up by 1
	// if it's been the right amount of time to make him hungrier
			// this.time
			// increase hunger level
	feedingTime(feed){
		if(this.time % 2 === 0){
			console.log('Feed me!');
			let $hunger = $('.hunger')
			$hunger.text('Hunger level: ' + (this.newTom.hunger --));
			console.log(this.newTom.hunger);
		} if(this.newTom.hunger === 0){
			console.log('You lost!');
			this.died();
		}

	},

	lightsOut(){
		// to help his sleepiness level. When you turn the light out his level will go down 1
	},

	play(){

	},

	died(){
		if(this.newTom.hunger === 0 || this.newTom.hunger === 0 || this.newTom.hunger === 0){
			console.log('Your pet died!');
			this.newTom.time = 0
		}
	}
};

// Event listeners --------------------------

$('form').on('submit',(event) => {
	event.preventDefault();
	const input = $('#input-box').val()
	game.createTamagotchi(input);
	// input.hide();

$('.feed').on('click', (e) => {
	console.log('button works!');
	let $hunger = $('.hunger') 
	$hunger.text('Hunger level: ' + (game.newTom.hunger += 1));
})

});

