import test from "node:test";
import assert from "node:assert/strict";
import averageUnitCost from "./averageUnitCost.js"

test('averageUnitCost', () => {
    assert.equal(averageUnitCost("0.00", 3), "0.00");
    assert.equal(averageUnitCost("10.00", 3), "3.33");
    assert.equal(averageUnitCost("1.00", 6), "0.17");
    assert.equal(averageUnitCost("1.00", 8), "0.12");
    assert.equal(averageUnitCost("3.00", 8), "0.38");
    assert.equal(averageUnitCost("9007199254740993.00", 1), "9007199254740993.00");
})