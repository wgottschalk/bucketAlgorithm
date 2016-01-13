/*
* @params {string} direction side of the empty target
* @params {array} bucket array of two bucket's current values
*
* Returns a tuple representing the two bucket's updated values
*/

import _ from 'ramda';

const empty = (direction, bucket) => {
	let copy = [].concat(bucket);
	const index = direction === "left" ? 0 : 1;
	copy[index] = 0;
	return copy;
}

export default _.curry(empty);