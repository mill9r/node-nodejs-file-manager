import {rendererStrategy} from './print/index.js'
import {readEnv} from './env/index.js'
import {fileManagerDataController} from './controller/index.js';


const main = async () => {
	const user = readEnv()['username'];
    rendererStrategy.welcome(user);
 
    process.on('SIGINT', function () {
       rendererStrategy.goodbye(user);
       process.exit(2);
    });


    fileManagerDataController(user, async (data) => console.log(data));

}

await main()