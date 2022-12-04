import { promises as fsPromises } from "fs";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const fileContent = await fsPromises.readFile(pathToFile, {
      encoding: "utf8",
    });
    console.log(fileContent);
  } catch (e) {
    throw Error("FS operation failed");
  }
};

await read();
