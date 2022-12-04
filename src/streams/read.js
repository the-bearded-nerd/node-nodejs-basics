import * as process from "process";
import * as fs from "fs";
import * as url from "url";
import * as path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const FILE_TO_READ = "fileToRead.txt";
const pathToFileToRead = path.join(__dirname, "files", FILE_TO_READ);

const read = async () => {
  const readStream = fs.createReadStream(pathToFileToRead);
  readStream.on("data", (chunk) => process.stdout.write(chunk));
};

await read();
