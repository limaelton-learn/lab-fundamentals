import test from 'node:test';
import assert from 'node:assert/strict';
import { firstLargeOrder } from './breakpointsTst.js';

test('returns null when there is no large order', () => {
    const orders = [
        { id: 'a', value: 20 },
        { id: 'b', value: 80 },
    ];

    assert.equal(firstLargeOrder(orders), null);
})

test('returns null when there is empty order', () => {
    const orders = [
    ];

    assert.equal(firstLargeOrder(orders), null);
})

test('returns the first large order ID', () => {
    const orders = [
        { id: 'a', value: 20 },
        { id: 'b', value: 101 },
        { id: 'c', value: 22 },
        { id: 'd', value: 80 },
    ];

    assert.equal(firstLargeOrder(orders), 'b');
})