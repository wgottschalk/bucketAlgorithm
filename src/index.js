/*
* @params {number} size1 bucket1's max volume
* @params {number} size2 bucket2's max volume
* @params {number} target the desired volume of one of the buckets
*
* Returns the minimum number of steps needed to reach the target value
*/

import _ from "ramda";
import getCount from "./getCount.js";

const minBuckets = (size1, size2, target) => {
	const AtoB = getCount(size1, size2, target);
	const BtoA = getCount(size2, size1, target);
	return _.min(AtoB, BtoA);
}

export default minBuckets;