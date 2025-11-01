export const readEnv = () => {
	const args = process.argv.slice(2);
	const composedArgs = args.reduce((acc, arg) => {
	    if(arg?.startsWith('--')) {
	      const [k,v = null] = arg.split('=');
	      const key = k.replace('--', '');
	      acc[key] = v;
	    } 
	     return acc;
   }, {})


	return composedArgs;
}