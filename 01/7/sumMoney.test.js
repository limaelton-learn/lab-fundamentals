import test from "node:test";
import assert from "node:assert/strict";
import sumMoney from "./sumMoney.js"

test('', () => {
    assert.equal(sumMoney([]), 0n);
    assert.equal(sumMoney(["0.100", "0.200"]), 30n);
    assert.equal(sumMoney(["1.004"]), 100n);
    assert.equal(sumMoney(["1.005"]), 101n);
    assert.equal(sumMoney(["1.006"]), 101n);
    assert.equal(sumMoney(["0.005", "0.005"]), 1n);
    assert.equal(sumMoney(["90071992547409.910", "0.020"]), 9007199254740993n);
});