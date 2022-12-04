import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const someRandomNumber = Math.random();
  if (someRandomNumber < 0.5) {
    throw Error();
  } else {
    parentPort.postMessage(nthFibonacci(workerData));
  }
};

sendResult();
