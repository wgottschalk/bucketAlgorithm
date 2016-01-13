/*
* @params {number} value1 bucket1's value
* @params {number} value2 bucket2's value
* @params {array} bucket array of two bucket's current values
*
* Returns a tuple representing the two bucket's updated values
*/

import _ from 'ramda';

const transfer = (value1, value2, bucket) => {
	const x = Math.min(bucket[0], value2 - bucket[1]);
	return [bucket[0] - x, bucket[1] + x];
}

export default _.curry(transfer);