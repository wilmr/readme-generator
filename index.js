// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
	{
		name: 'title',
		message: 'What is the title of this application?',
		type: 'input',
	},

	{
		name: 'description',
		message: 'What does this application do?',
		type: 'input',
	},
	{
		name: 'install',
		message: 'How do I install this application?',
		type: 'input',
	},
	{ name: 'usage', message: 'How do I use this application?', type: 'input' },
	{
		name: 'contributing',
		message: 'How do I contribute to this application?',
		type: 'input',
	},
	{
		name: 'testing',
		message: 'How do I test this application?',
		type: 'input',
	},
	{
		name: 'license',
		message: 'Select kind of license for this application:',
		type: 'list',
		choices: [
			'Apache license 2.0',
			'Boost Software License 1.0',
			'BSD 2-clause "Simplified" license',
			'bsd-2-clause',
			'BSD 3-clause "New" or "Revised" license',
			'BSD 3-clause Clear license',
			'Creative Commons Zero v1.0 Universal',
			'Creative Commons Attribution 4.0',
			'Creative Commons Attribution Share Alike 4.0',
			'Educational Community License v2.0',
			'Eclipse Public License 1.0',
			'Eclipse Public License 2.0',
			'European Union Public License 1.1',
			'GNU Affero General Public License v3.0',
			'GNU General Public License v2.0',
			'GNU General Public License v3.0',
			'GNU Lesser General Public License v2.1',
			'MIT',
			'Mozilla Public License 2.0',
			'Open Software License 3.0',
			'PostgreSQL License',
			'SIL Open Font License 1.1',
			'University of Illinois/NCSA Open Source License',
			'The Unlicense',
		],
	},
	{ name: 'username', message: 'What is your Github username?', type: 'input' },
	{ name: 'email', message: 'What is your e-mail?', type: 'input' },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
