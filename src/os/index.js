import os from 'os';
import {serializeData} from "../serializer/index.js";

const OS = {
	abstract:() => {
		console.log('Not implemented.');
	},

	eol: () => {
		return serializeData(os.EOL);
	},

    cpus: () => {
    	return os.cpus().length;
    },

    username: () => {
    	return os.userInfo().username;
    },

    architecture: () => {
    	return os.arch();
    },

    homedir: () => {
    	return os.homedir();
    }
}

const context = (input) => {
	const osOut = OS[input] || OS.abstract;
	return osOut();
}

export const osResolver = strategy => {
	const strategyKey = strategy?.replace('--', '').toLowerCase();
	return context(strategyKey);
}