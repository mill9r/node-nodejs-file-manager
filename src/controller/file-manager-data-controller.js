import { createInterface } from 'node:readline';
import {rendererStrategy} from '../print/index.js'


const dataStream = createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: '$ '
});





export const fileManagerDataController = async (user, exectuionCallBack) => {
	dataStream.on('close', async () => {
	rendererStrategy.goodbye(user)
	})

	dataStream.on('line', async (line) => {

		if (line.trim() === '.exit') {
            dataStream.close();
            return;
        }

        if (line.trim() === '') {
            dataStream.prompt();
            return;
        }

        await exectuionCallBack(line);
        dataStream.prompt();

	})
}

