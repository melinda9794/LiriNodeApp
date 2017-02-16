var liri = require('./liriCode.js')
var inquirer = require('inquirer');


var question = [{
		type: 'input',
		name: 'your_name',
		message: 'Hello, my name is Liri , What is your  name?'

	}
];

inquirer.prompt(question).then(function(answer) {

	function mainMenu() {

		inquirer.prompt([{
			type: 'list',
			message: `${answer.your_name}, What you want to do?`,
			name: 'commands',
			choices: [
				new inquirer.Separator(' <---Choices---> '), {
					name: 'Look Dzmitry\' tweets'
				}, {
					name: 'Find Tweets on any topic'
				}, {
					name: 'Find the Song'
				}, {
					name: 'Find the movie'
				}, {
					name: 'Do a random'
				}, {
					name: 'Exit'
				}


			],



		}]).then(function(answers) {



			if (_______ === 'Find Tweets on any topic') {


				const TweetTopic = {

					type: 'input',
					name: 'your_tweet',
					message: 'What would you like to tweet?'

				}
			};

			if ( ______ === 'Find the Song') {


				var SongTopic = {

					type: 'input',
					name: 'your_song',
					message: 'What song are you looking for?'

				}
			}

			if ( _______ === 'Find the movie') {


				var MovieTopic = {

					type: 'input',
					name: 'your_movie',
					message: 'What movie are you looking for?'

				}
			}
		});
	}
	mainMenu()

});