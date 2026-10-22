import test from 'node:test';
import assert from 'node:assert';
import normalizeRegistration from './normalizeRegistration.js';

test('returns new normalized object', () => {
    const first = {
        name: "  Alex  ", 
        age: "0", 
        subscribed: false
    };

    assert.deepStrictEqual(normalizeRegistration(first), {
        name: "Alex", 
        age: 0, 
        subscribed: false
    });

    const sec = { 
        name: "   ", 
        age: null, 
        subscribed: true 
    };

    assert.deepStrictEqual(normalizeRegistration(sec), {
        name: "Unknown",
        age: null,
        subscribed: true,
    });

    const thr = { 
        name: "Sam" 
    };

    assert.deepStrictEqual(normalizeRegistration(thr), {
        name: "Sam",
        age: null,
        subscribed: false,
    });
}) 