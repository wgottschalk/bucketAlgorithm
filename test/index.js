import test from "tape"
import fill from "../src/fill.js";
import empty from "../src/empty.js";
import transfer from "../src/transfer.js";
import getCount from "../src/getCount";
import minBuckets from "../src/index";

test("Filling function", t => {
	t.plan(2);

	let bucket = [0,0];
	const fill3 = fill(3);

	t.deepEquals(fill(5, bucket), [5,0], "Bucket fills to the proper value");
	t.deepEquals(fill3(bucket), [3,0], "The fill function can be curried");
});

test("Empty function", t => {
	t.plan(1);

	let bucket = [0,5];

	t.deepEquals(empty(bucket), [0,0], "Bucket empties to [0,0]");
});

test("Transfer function", t => {
	t.plan(3);

	let bucket = [3,0];
	const transBig = transfer(3,5);
	const transSmall = transfer(3,1);
	t.deepEquals(transBig(bucket), [0,3],
		"Bucket transfers right to a larger container properly");
	t.deepEquals(transSmall(bucket), [2,1],
		"Bucket transfers right to a smaller container properly");
	t.deepEquals(bucket, [3,0], "The updated value has not been mutated");
});

test("Bucket Algorithm Function", t => {
	t.plan(5);
	t.equals(getCount(3,5,4), 8,
		"Returns 8 steps for buckets size 3 & 5 w/ target of 4");
	t.equals(getCount(5,3,4), 6,
		"Returns 6 steps for buckets size 5 & 3 w/ target of 4");
	t.equals(getCount(4,7,1), 4,
		"Returns 4 steps for buckets size 4 & 7 w/ target of 2");
	t.equals(getCount(7,4,1), 14,
		"Returns 15 steps for buckets size 7 & 4 w/ target of 1");
	t.equals(getCount(2,8,1), "Not Possible",
		"Breaks out of loop is count isn't found");
});

test("Final Result", t => {
	t.plan(3);
	t.equals(minBuckets(3,5,4), 6,
		"returns minimum steps to reach volume of 4 w/ buckets size 3 and 5")
	t.equals(minBuckets(7,4,1), 4,
		"returns minimum steps to reach volume of 1 w/ buckets size 7 and 4")
	t.equals(minBuckets(2,8,3), "Not Possible",
		"determines if target cannot be reached");
});