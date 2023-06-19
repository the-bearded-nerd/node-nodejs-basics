import * as url from "url";
import * as path from "path";
import { promises as fsPromises } from "fs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToWrongFilename = path.join(__dirname, "files", "wrongFilename.txt");
const pathToProperFilename = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fsPromises.rename(pathToWrongFilename, pathToProperFilename);
  } catch (e) {
    throw Error("FS operation failed");
  }
};

await rename();
