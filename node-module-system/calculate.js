import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const keywords = ['plus', 'minus', 'times', 'over'];

const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[4]);

process.argv[3] === 'plus' && console.log('result:', add(arg1, arg2));
process.argv[3] === 'minus' && console.log('result:', subtract(arg1, arg2));
process.argv[3] === 'times' && console.log('result:', multiply(arg1, arg2));
process.argv[3] === 'over' && console.log('result:', divide(arg1, arg2));
!keywords.includes(process.argv[3]) && console.log('invalid operation');
