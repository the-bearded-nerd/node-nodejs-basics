import * as url from "url";
import * as path from "path";
import { promises as fsPromises } from "fs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fsPromises.rm(pathToFileToRemove);
  } catch (e) {
    throw Error("FS operation failed");
  }
};

await remove();
