import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const child = fork("./files/script.js", args);
};

spawnChildProcess();
