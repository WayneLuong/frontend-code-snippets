/* 
npm install webpack -g (install globally for use with cmd)
npm install webpack -s (install to this project)
npm install webpack-cli -s
 
create webpack config in root folder(webpack will auto use)


cmd:
webpack --watch (will watch and update any changes)
OR
use package.json scripts
*/

/* import {test} from './module1.js'; */

//imports the code from each module.js file asynchronously
require('./module1.js');
require('./module2.js');

//imported logging function from module1 
import {logging, test} from './module1'

logging('imported function');

var testobj = new test();
testobj.createAlert();
/* var x = testobj.x; */