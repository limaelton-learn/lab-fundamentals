import test from 'node:test';
import assert from 'node:assert/strict';
import billingDates from './billingDates.js';

test('calcula vencimento atravessando fevereiro de um ano bissexto', () => {
    const result = billingDates('2024-02-28', 2, '2026-01-01T01:30:00Z');

    assert.deepEqual(result, {
        dueDate: '2024-03-01',
        paidAtUtc: '01/01/2026, 01:30',
        paidAtSaoPaulo: '31/12/2025, 22:30',
    });
});

test('calcula vencimento atravessando a virada do ano', () => {
    const result = billingDates('2025-12-31', 1, '2026-01-01T01:30:00Z');

    assert.deepEqual(result, {
        dueDate: '2026-01-01',
        paidAtUtc: '01/01/2026, 01:30',
        paidAtSaoPaulo: '31/12/2025, 22:30',
    });
});

test('prazo zero preserva a data civil e pagamento não define o vencimento', () => {
    const result = billingDates('2026-10-26', 0, '2026-07-15T15:45:00Z');

    assert.deepEqual(result, {
        dueDate: '2026-10-26',
        paidAtUtc: '15/07/2026, 15:45',
        paidAtSaoPaulo: '15/07/2026, 12:45',
    });
});
