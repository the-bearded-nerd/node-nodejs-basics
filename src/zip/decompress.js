import * as fs from "fs";
import * as zlib from "zlib";

import * as url from "url";
import * as path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFileToSave = path.join(__dirname, "files", "fileToCompress.txt");
const pathToFileToUnpack = path.join(__dirname, "files", "archive.gz");

const decompress = async () => {
  const input = fs.createReadStream(pathToFileToUnpack);
  const unzip = zlib.createUnzip();
  const output = fs.createWriteStream(pathToFileToSave);

  input.pipe(unzip).pipe(output);
};

await decompress();
