
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

	endGame: 100,

	newTom: null, 

	isAlive: true,

	lightsOn: true,



	createTamagotchi(name){
		this.newTom = new Tamagotchi(name);
		this.printStuff()
		this.startTimer();
	},

	printStuff() {
		$('.name').text(this.newTom.name+"'s stats -- ")
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
			
			this.feedingTime();
			this.deadOfSleepiness();
			this.ageAmount();
			this.deadOfBoredom();

			if(this.time === this.endGame) {
				let $img2 = $('#in')
				$img2.attr('src', 'https://media.giphy.com/media/1rPTzNcBTukJ0GZPFk/giphy.gif');
				console.log('Your pet died, the timer ran out!');
				clearInterval(interval);
			} else if (!this.isAlive) {
				clearInterval(interval)
			} else {
				this.time += 1
			}

			$timer.text(`Kill timer: ${this.time}s`)

		}, 500)

	},


	feedingTime(feed){
		if(this.time % 2 === 0){

			this.newTom.hunger -= 1
			

		} else if(this.newTom.hunger === 0){
			console.log('Your pet died of hunger!');
			let $img2 = $('#in')
			$img2.attr('src', 'https://media.giphy.com/media/1rPTzNcBTukJ0GZPFk/giphy.gif');
			this.died();
		}
	},

	deadOfSleepiness(){
		
		if(this.newTom.sleepiness === 0) {
			console.log('Your pet died of exhaustion!');
			let $img2 = $('#in')
			$img2.attr('src', 'https://media.giphy.com/media/1rPTzNcBTukJ0GZPFk/giphy.gif');	
			this.died();
		}

		if(this.time % 5 === 0 && this.time > 0){
			
			if(this.lightsOn === false){
				this.newTom.sleepiness += 1
			} else{
				this.newTom.sleepiness -= 1
			}
		}
		// this.checkSleepiness();
	},

	ageAmount(){
		if(this.time % 3 === 0){
			this.newTom.age += 1;
			// this.printStuff();
		} else if(this.newTom.age === 5){
			$('img').attr('class', 'picture').animate({height: '200', width: '700'}, 2000)
		} else if(this.newTom.age === 10){
			$('img').attr('class', 'picture').animate({height: '450', width: '200'}, 2000)
		}
		else if(this.age === 0){
			console.log('Your pet died!');
			let $img2 = $('#in')
			$img2.attr('src', 'https://media.giphy.com/media/1rPTzNcBTukJ0GZPFk/giphy.gif');
			this.died()
		}
	},

	deadOfBoredom(){
		
		if(this.time % 4 === 0){
			this.newTom.boredom -= 1;
			this.printStuff();
		} else if(this.newTom.boredom === 0){
			console.log('Your pet died of boredom!');
			let $img2 = $('#in')
			$img2.attr('src', 'https://media.giphy.com/media/1rPTzNcBTukJ0GZPFk/giphy.gif');
			this.died();
		}

	},

	inputForm(){
		event.preventDefault();
		const input = $('#input-box').val()
		game.createTamagotchi(input);
	},

	feeding(){
		this.newTom.hunger += 1
		this.printStuff()
		
	},

	lightsOut(){
		
		// this.newTom.sleepiness += 1
		// this.printStuff()
		let $tam = $('.lightOff');
		$tam.css('background-color', 'black');
		this.lightsOn = false;
		this.deadOfSleepiness()

	},
	
	turnOnLights(){
		this.lightsOn = true;
		let $tamOn = $('.lightOff');
		$tamOn.css('background-color', 'white');
		this.deadOfSleepiness()

	},

	playWithMe(){
		this.newTom.boredom += 1
		this.printStuff()
		// let $boredom = $('.boredom')
		// $boredom.text('Boredom level: ' + (game.newTom.boredom += 1));
	},

	// checkSleepiness(){
	// 	while (false){
	// 		this.newTom.sleepiness += 1 ;
	// 	}
	// },

	died(){
		let $img2 = $('#in')
		$img2.attr('src', 'https://media.giphy.com/media/1rPTzNcBTukJ0GZPFk/giphy.gif');
		this.isAlive = false
	}
};

// Event listeners --------------------------

$('form').on('submit',(event) => {
	game.inputForm()
})

$('.feed').on('click', (e) => {
	game.feeding()
})

$('.lightOff').on('click', (e) => {
	game.lightsOut()
})

$('.lightOn').on('click', (e) => {
	game.turnOnLights()

})

$('.play').on('click', (e) => {
	game.playWithMe()
})

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
