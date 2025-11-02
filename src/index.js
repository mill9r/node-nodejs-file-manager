import {rendererStrategy} from './print/index.js'
import {readEnv} from './env/index.js'
import {fileManagerDataController, Chain} from './controller/index.js';
import {osResolver} from './os/index.js';


const main = async () => {
	const user = readEnv()['username'];
    rendererStrategy.welcome(user);
 
    process.on('SIGINT', function () {
       rendererStrategy.goodbye(user);
       process.exit(2);
    });

    const chainOfHandlers = new Chain()
      .add((params, next) => {
	    if (params?.length >= 2 && params[0] === 'os') {
	      return rendererStrategy.print(osResolver(params[1]));
		}
	    return next();
	  })


    fileManagerDataController(user, async (data) => {
    	const input = data.split(' ');
    	chainOfHandlers.process(input);
    });

}

await main()