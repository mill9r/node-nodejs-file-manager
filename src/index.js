import {rendererStrategy} from './print/index.js'
import {readEnv} from './env/index.js'

rendererStrategy.directory('dir');

console.log(readEnv())