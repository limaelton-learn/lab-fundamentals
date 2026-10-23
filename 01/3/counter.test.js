import assert from 'node:assert/strict';
import test from 'node:test';
import createCounter from './counter.js';

test('run counters closures', () => {
    const firstCounter = createCounter(0);
    const secCounter = createCounter(10);

    assert.equal(firstCounter(), 1);

    assert.equal(secCounter(), 11); 

    assert.equal(firstCounter(), 2);

    assert.equal(secCounter(), 12); 

    assert.equal(firstCounter(), 3);
})