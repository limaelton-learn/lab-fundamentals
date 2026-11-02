import assert from 'node:assert/strict';
import test from 'node:test';
import calculateAccountFee from './account.js';

test('calculate account monthly fee', () => {
    //balance >= 100000
    let balanceCents = 100000;
    let monthlyTransactions = 300;
    assert.equal(calculateAccountFee(balanceCents, monthlyTransactions), 0);

    balanceCents = 100001;
    monthlyTransactions = 300;
    assert.equal(calculateAccountFee(balanceCents, monthlyTransactions), 0);

    balanceCents = 99999;
    monthlyTransactions = 5;
    assert.equal(calculateAccountFee(balanceCents, monthlyTransactions), 500);

    balanceCents = 99999;
    monthlyTransactions = 6;
    assert.equal(calculateAccountFee(balanceCents, monthlyTransactions), 600);

    balanceCents = 12;
    monthlyTransactions = 12;
    assert.equal(calculateAccountFee(balanceCents, monthlyTransactions), 1200);

    balanceCents = 12;
    monthlyTransactions = 0;
    assert.equal(calculateAccountFee(balanceCents, monthlyTransactions), 500);
})