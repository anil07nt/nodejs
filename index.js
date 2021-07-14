// const sqaure = {
// 	area : (a) => (a*a),
// 	perimeer: (a) => (4*a)
// }
const sqaure = require('./square.js');
const calsquare = (a) => {
	console.log(`the value of a is ${a} and the area is `  +sqaure.area(a));
	console.log(`the value of a is ${a} and the perimeer is `  +sqaure.perimeer(a));
}

calsquare(5)