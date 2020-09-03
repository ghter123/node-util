const assert = require('assert');
const { timeLimitPromise } = require('..');

function createTestPromise() {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve('test-promise');
    }, 150);
  }));
}

it('Should resolve promise', () => {
  const promise = createTestPromise();

  return timeLimitPromise(promise, 1000)
    .then((val) => {
      assert.strictEqual(val, 'test-promise');
    });
});

it('Should reject promise on timeout', async () => {
  const promise = createTestPromise();
  assert.rejects(timeLimitPromise(promise, 30), Error, 'timeout exception 30ms');
});
