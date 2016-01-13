/*
* @params {number} capacity1 bucket1's max volume
* @params {number} capacity2 bucket2's max volume
* @params {number} target the desired volume of one of the buckets
*
* Returns the number of steps needed to reach the target value
* This function "pours" the left value into the right
* and "empties" the right value when it reaches capacity
*/

import fill from "./fill.js";
import empty from "./empty.js";
import transfer from "./transfer.js";
import _ from "ramda";

const getCount = (capacity1, capacity2, target) => {
	let count = 0;
	let buckets = [0,0];
	//use a stop count to prevent infinte loop
	const stopCount = capacity1 * capacity2 * 2;
	const targetFound = _.contains(target);

	while(!targetFound(buckets) && count < stopCount) {
		if (buckets[0] === 0) buckets = fill(capacity1, buckets);
		else if (buckets[1] < capacity2) buckets = transfer(capacity1, capacity2, buckets);
		else buckets = empty(buckets);
		count++;
	}
	return count < stopCount ? count : "Not Possible";
}

export default getCount;