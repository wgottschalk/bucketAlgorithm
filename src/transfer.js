/*
* @params {number} value1 bucket1's value
* @params {number} value2 bucket2's value
* @params {string} direction direction of the transfer
* @params {array} bucket array of two bucket's current values
*
* Returns a tuple representing the two bucket's updated values
*/

import _ from 'ramda';

const transfer = (value1, value2, direction, bucket) => {
	const transferLeft = direction === "left"
	const destIndex = transferLeft ? 0 : 1;
	const origIndex = transferLeft ? 1 : 0;
	if (transferLeft) {
		const x = Math.min(value1 - bucket[0], bucket[1]);
		return [bucket[0] + x, bucket[1] - x];
	} else {
		const x = Math.min(bucket[0], value2 - bucket[1]);
		return [bucket[0] - x, bucket[1] + x];
	}
}

export default _.curry(transfer);