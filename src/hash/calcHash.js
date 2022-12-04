import { promises as fsPromises } from "fs";
import * as path from "path";
import * as url from "url";
import { createHash } from "crypto";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

function sha256(content) {
  return createHash("sha256").update(content).digest("hex");
}

const calculateHash = async () => {
  try {
    const fileContent = await fsPromises.readFile(pathToFile, {
      encoding: "utf8",
    });
    console.log(sha256(fileContent));
  } catch (e) {
    throw Error("FS operation failed");
  }
};

await calculateHash();
