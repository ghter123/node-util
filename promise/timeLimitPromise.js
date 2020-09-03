/**
 * 带超时限制的promise，单位是毫秒。
 */
function timeLimitPromise(promise, timeOut) {
  if (typeof timeOut !== 'number') throw new Error('timeout must be number');
  let limitTime;
  try {
    limitTime = Math.trunc(timeOut);
  } catch (error) {
    throw new Error('timeout must be number');
  }
  if (limitTime <= 0) throw new Error('timeout must > 0');
  return Promise.race([promise, new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`timeout exception ${limitTime}ms`));
    }, limitTime);
  })]);
}

module.exports = timeLimitPromise;
