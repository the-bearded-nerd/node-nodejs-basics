import { promises as fsPromises } from "fs";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFolder = path.join(__dirname, "files");

const list = async () => {
  try {
    const fileNames = await fsPromises.readdir(pathToFolder);
    console.log(fileNames);
  } catch (e) {
    throw Error("FS operation failed");
  }
};

await list();
