import * as fs from "fs";
import * as zlib from "zlib";

import * as url from "url";
import * as path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFileToCompress = path.join(
  __dirname,
  "files",
  "fileToCompress.txt"
);
const pathToFileToArchive = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const input = fs.createReadStream(pathToFileToCompress, "utf8");
  const output = fs.createWriteStream(pathToFileToArchive);
  const gzip = zlib.createGzip();
  input.pipe(gzip).pipe(output);
};

await compress();
