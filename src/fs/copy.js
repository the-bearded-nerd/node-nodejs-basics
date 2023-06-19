import { promises as fsPromises } from "fs";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToOrigin = path.join(__dirname, "files");
const pathToDest = path.join(__dirname, "files_copy");

const copy = async () => {
  let fileNames;
  try {
    await fsPromises.mkdir(pathToDest);
    fileNames = await fsPromises.readdir(pathToOrigin);
  } catch (e) {
    throw Error("FS operation failed");
  }
  for (let fileName of fileNames) {
    await fsPromises.copyFile(
      path.join(pathToOrigin, fileName),
      path.join(pathToDest, fileName)
    );
  }
};

await copy();
