
class Tamagotchi {
		constructor(name){
			this.legs = 4;
			this.hunger = Math.floor(Math.random() * 10) +1;
			this.sleepiness = Math.floor(Math.random() * 10) +1;
			this.boredom = Math.floor(Math.random() * 10) +1;
			this.name = name;
			this.age = 0;
			
		}

		kill() {

		}


	}



const game = {

	time: 0,

	endGame: 30,

	newTom: null, 

	isAlive: true,



	createTamagotchi(name){
		this.newTom = new Tamagotchi(name);
		// console.log(this.newTom);


		this.printStuff()


		this.startTimer();
	},

	printStuff() {
		$('.hunger').text('Hunger level: ')
		$('.hunger').append(this.newTom.hunger)
		$('.sleepiness').text('Sleepiness level: ')
		$('.sleepiness').append(this.newTom.sleepiness)
		$('.boredom').text('Boredom level: ')
		$('.boredom').append(this.newTom.boredom)
		$('.timer').text('Timer: ')
		$('.timer').append(this.newTom.time)
		$('.age').text('Age: ')
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
				clearInterval(interval);
			} else if (!this.isAlive) {
				clearInterval(interval)
			} else {
				this.time += 1
				// this.age += 1
			}

			//update the time on the DOM
			$timer.text(`Timer: ${this.time}s`)

		}, 500)

	},

	animate(){
		$('<img>').animate({left: '500px'})
	},

	feedingTime(feed){
		if(this.time % 2 === 0){

			this.newTom.hunger -= 1

		} else if(this.newTom.hunger === 0){
			this.died();
		}
	},

	deadOfSleepiness(){
		
		if(this.newTom.sleepiness === 0) {
			this.died();
			
		}

		if(this.time % 3 === 0 && this.time > 0){
			this.newTom.sleepiness -= 1

		} 
	},

	ageAmount(){
		// console.log("ageAmount")
		if(this.time % 2 === 0){
			this.newTom.age += 1;
			this.printStuff();
		} 
		else if(this.age === 0){
			this.died()
		}
	},

	deadOfBoredom(){
		
		if(this.time % 4 === 0){
			this.newTom.boredom -= 1;
			this.printStuff();
		} else if(this.newTom.boredom === 0){
			this.died();
		}

	},

	died(){
		console.log('Your pet died!');
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
	// console.log('button works!');
	let $hunger = $('.hunger') 
	$hunger.text('Hunger level: ' + (game.newTom.hunger += 1));
})

$('.lightOff').on('click', (e) => {
	// console.log('button works');
	let $light = $('.sleepiness')
	$light.text('Sleepiness level: ' + (game.newTom.sleepiness += 1));
	let $img = $('img');
	$img.css('background-color', 'black')

})

$('.play').on('click', (e) => {
	let $boredom = $('.boredom')
	$boredom.text('Boredom level: ' + (game.newTom.boredom += 1));
})


