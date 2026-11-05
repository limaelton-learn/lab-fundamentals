import test from "node:test";
import assert from "node:assert/strict";
import createAttemptTracker from "./attemptTracker.js";

test("consulta começa em zero e cada registro incrementa a contagem", () => {
    const tracker = createAttemptTracker();
    const request = { id: "R1" };

    assert.equal(tracker.getAttempts(request), 0);
    assert.equal(tracker.registerAttempt(request), 1);
    assert.equal(tracker.registerAttempt(request), 2);
    assert.equal(tracker.getAttempts(request), 2);
    assert.equal(tracker.getAttempts(request), 2);
});

test("reset informa se removeu um registro e permite reiniciar a contagem", () => {
    const tracker = createAttemptTracker();
    const request = { id: "R1" };

    assert.equal(tracker.resetAttempts(request), false);
    assert.equal(tracker.registerAttempt(request), 1);
    assert.equal(tracker.registerAttempt(request), 2);
    assert.equal(tracker.resetAttempts(request), true);
    assert.equal(tracker.getAttempts(request), 0);
    assert.equal(tracker.resetAttempts(request), false);
    assert.equal(tracker.registerAttempt(request), 1);
});

test("objetos distintos com o mesmo id mantêm contagens independentes", () => {
    const tracker = createAttemptTracker();
    const requestA = { id: "R1" };
    const requestB = { id: "R1" };
    const sameRequest = requestA;

    assert.equal(tracker.registerAttempt(requestA), 1);
    assert.equal(tracker.registerAttempt(sameRequest), 2);
    assert.equal(tracker.getAttempts(requestB), 0);
    assert.equal(tracker.registerAttempt(requestB), 1);
    assert.equal(tracker.getAttempts(requestA), 2);

    assert.equal(tracker.resetAttempts(requestA), true);
    assert.equal(tracker.getAttempts(requestA), 0);
    assert.equal(tracker.getAttempts(requestB), 1);
});

test("rastreadores diferentes mantêm estados independentes para o mesmo objeto", () => {
    const tracker = createAttemptTracker();
    const otherTracker = createAttemptTracker();
    const request = { id: "R1" };

    assert.equal(tracker.registerAttempt(request), 1);
    assert.equal(tracker.registerAttempt(request), 2);
    assert.equal(otherTracker.getAttempts(request), 0);
    assert.equal(otherTracker.registerAttempt(request), 1);
    assert.equal(tracker.getAttempts(request), 2);

    assert.equal(otherTracker.resetAttempts(request), true);
    assert.equal(otherTracker.getAttempts(request), 0);
    assert.equal(tracker.getAttempts(request), 2);
});

test("consultar, registrar e resetar preservam a requisição recebida", () => {
    const tracker = createAttemptTracker();
    const request = Object.freeze({ id: "R1" });

    assert.equal(tracker.getAttempts(request), 0);
    assert.deepEqual(request, { id: "R1" });
    assert.equal(tracker.registerAttempt(request), 1);
    assert.deepEqual(request, { id: "R1" });
    assert.equal(tracker.getAttempts(request), 1);
    assert.equal(tracker.resetAttempts(request), true);
    assert.deepEqual(request, { id: "R1" });
});
