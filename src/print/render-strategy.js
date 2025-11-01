const RENDERERS = {
	abstract: () => {
		console.log("Invalid input");
	},

	table: (input) => {
		console.table(input);
	},

	directory: (input) => {
		 console.log(`You are currently in ${input}`)
	},

	welcome: (input) => {
		 console.log(`Welcome to the File Manager, ${input}!`)
	},

	goodbye: (input) => {
		 console.log(`Thank you for using File Manager, ${input}, goodbye!`)
	}
}

const context = rendererName => {
	const renderer = RENDERERS[rendererName] || RENDERERS.abstract;
	return (data) => renderer(data);
}

export const rendererStrategy = {
	table : context('table'),
	directory : context('directory'),
	welcome : context('welcome'),
	goodbye : context('goodbye'),
}