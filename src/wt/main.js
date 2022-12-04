import { Worker } from "worker_threads";
import * as os from "os";

const performCalculations = async () => {
  const cpuCount = os.cpus().length;
  const results = await Promise.all(
    Array(cpuCount)
      .fill()
      .map((_, index) => {
        return new Promise((resolve) => {
          const newWorker = new Worker("./worker.js", {
            workerData: index + 10,
          });
          newWorker.on("message", (data) =>
            resolve({ status: "resolved", data })
          );
          newWorker.on("error", () => resolve({ status: "error", data: null }));
        });
      })
  );
  console.log(results);
};

await performCalculations();
