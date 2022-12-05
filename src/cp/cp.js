import { fork } from "child_process";
import * as url from "url";
import * as path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const SCRIPT_NAME = "script.js";
const pathToScript = path.join(__dirname, "files", SCRIPT_NAME);

const spawnChildProcess = async (args) => {
  const child = fork(pathToScript, args);
};

spawnChildProcess();
