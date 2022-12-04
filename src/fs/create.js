import * as path from "path";
import * as url from "url";
import { promises as fsPromises } from "fs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    fsPromises.writeFile(pathToFile, "I am fresh and young", {
      flag: "wx",
    });
  } catch (e) {
    throw Error("FS operation failed");
  }
};

await create();
