import test from "tape"
import bucket from "../src"

test("bucket", (t) => {
  t.plan(1)
  t.equal(true, bucket(), "return true")
})
