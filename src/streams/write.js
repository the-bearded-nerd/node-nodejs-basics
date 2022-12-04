import * as process from "process";
import * as fs from "fs";
import * as url from "url";
import * as path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const FILE_TO_WRITE = "fileToWrite.txt";
const pathToFileToWrite = path.join(__dirname, "files", FILE_TO_WRITE);

const write = async () => {
  const output = fs.createWriteStream(pathToFileToWrite);
  process.stdin.on("data", (chunk) => output.write(chunk));
};

await write();
