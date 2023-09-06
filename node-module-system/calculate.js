import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

process.argv.forEach((val, index) => {
  val === 'plus' &&
    console.log('result:', add(process.argv[2], process.argv[4]));
  val === 'minus' &&
    console.log('result:', subtract(process.argv[2], process.argv[4]));
  val === 'times' &&
    console.log('result:', multiply(process.argv[2], process.argv[4]));
  val === 'over' &&
    console.log('result:', divide(process.argv[2], process.argv[4]));
});
