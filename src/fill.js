/*
* @params {number} value bucket's max volume
* @params {string} direction side of the filling target
* @params {array} bucket array of two bucket's current values
*
* Returns a tuple representing the two bucket's updated values
*/

import _ from 'ramda';

const fill = (value, direction, bucket) => {
	let copy = [].concat(bucket);
	const index = (direction === "left") ? 0 : 1;
	copy[index] = value;
	return copy;
}

export default _.curry(fill);
