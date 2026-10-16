import test from 'node:test';
import assert from 'node:assert/strict';
import { resumeOrder } from './resumerOrders.js'

test('resuming orders with its tests', () => {
    const result = resumeOrder([
        {value: 100},
        {value: 20},
        {value: -400},
        {value: 400},
    ]);

    assert.deepStrictEqual(result, { totals: 120, bigOrdersQuantity: 2});
});