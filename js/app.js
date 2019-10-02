
class Tamagotchi {
		constructor(name){
			this.legs = 4;
			this.hunger = Math.floor(Math.random() * 10) +1;
			this.sleepiness = Math.floor(Math.random() * 10) +1;
			this.boredom = Math.floor(Math.random() * 10) +1;
			this.name = name;
			this.age = 0;
			this.time = 10;
			
		}
	}

// time(){
// 	const $timer = $('.timer')

// 	const interval = setInterval (() => {
		
// 		if(this.timer === 10 ){
// 			clearInterval(interval);
// 		} else {
// 			this.timer++
// 		}
// 	},1000)
// },


const game = {

	createTamagotchi(name){
		const newTom = new Tamagotchi(name);
		console.log(newTom);
		$('.hunger').text('Hunger: ')
		$('.hunger').append(newTom.hunger)
		$('.sleepiness').text('Sleepiness level: ')
		$('.sleepiness').append(newTom.sleepiness)
		$('.boredom').text('Boredom level: ')
		$('.boredom').append(newTom.boredom)
		$('.timer').text('Timer: ')
		$('.timer').append(newTom.time)

		// $('.timer').append(this.timer())

		// game.timer();
	},
	// prompt the player by welcoming them to the game and asking they input a name for the Tomagotchi.
	// userPrompt(){

	// 	let userInput = prompt("Welcome to your Tamagotchi! What would you like to name you're pet?")
	// 	return new Tamagotchi(userInput, 'green')

	// },

	// create a function that will start incrementing the time up to 5 minutes. This will be part of the feeding, sleeping and playing functions as well. Every 15 seconds the tomagotchi's levels will go up, if they get to 10 then it dies.







	// create a feeding function. This will be used with an on.click() method down below, outside of the game. Everytime it's clicked the Tomagotchi's hungar level will go up by 1
	feedingTime(){
		$('health-stats').append()
	},

	lightsOut(){
		// to help his sleepiness level. When you turn the light out his level will go down 1
	},

	play(){

	}


};

// Event listeners --------------------------

$('form').on('submit',(event) => {
	event.preventDefault();
	const input = $('#input-box').val()
	game.createTamagotchi(input);
	// input.hide();
});




// console.log(game.userPrompt());

// ${start}

// listeners... only use methods down here outside of the game function, use these clicks etc on the methods above

// create a button 