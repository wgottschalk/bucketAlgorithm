import test from "tape"
import fill from "../src/fill.js";
import empty from "../src/empty.js";
import transfer from "../src/transfer.js";


test("Filling function", t => {
	t.plan(3);

	const bucket = [0, 0];
	const fillLeft = fill(3,"left");
	const fillRight = fill(5,"right");

	t.deepEquals(fillLeft(bucket), [3, 0], "Bucket fills on the left side");
	t.deepEquals(fillRight(bucket), [0, 5], "Bucket fills on the right side");
	t.deepEquals(bucket, [0,0], "The original value has not been mutated");
});

test("Empty function", t => {
	t.plan(3);

	const bucket = [3,5];
	const emptyLeft = empty("left");
	const emptyRight = empty("right");

	t.deepEquals(emptyLeft(bucket), [0, 5], "Bucket emptys on the left side");
	t.deepEquals(emptyRight(bucket), [3, 0], "Bucket emptys on the right side");
	t.deepEquals(bucket, [3,5], "The original value has not been mutated");
});

test("Transfer function", t => {
	t.plan(6);

	let bucket = [0,5];
	const transLeftBig = transfer(7,5,"left");
	const transLeftSmall = transfer(3,5,"left");

	t.deepEquals(transLeftBig(bucket), [5,0],
		"Bucket transfers to bigger container properly");
	t.deepEquals(transLeftSmall(bucket), [3,2],
		"Bucket transfers left to smaller container properly");
	t.deepEquals(bucket, [0,5], "The original value has not been mutated");

	bucket = [3,0];
	const transRightBig = transfer(3,5,"right");
	const transRightSmall = transfer(3,1,"right");
	t.deepEquals(transRightBig(bucket), [0,3],
		"Bucket transfers right to a larger container properly");
	t.deepEquals(transRightSmall(bucket), [2,1],
		"Bucket transfers right to a smaller container properly");
	t.deepEquals(bucket, [3,0], "The updated value has not been mutated");
})
