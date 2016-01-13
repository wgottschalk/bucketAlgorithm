/*
* @params {number} value bucket's max volume
* @params {array} bucket array of two bucket's current values
*
* Returns a tuple with the 1st value equal to its max capacity
*/
import _ from "ramda";

const fill = (value, bucket) => {
	let copy = _.concat([], bucket);
	copy[0] = value;
	return copy;
}

export default _.curry(fill);
