import { Transform } from "stream";

const reverseTr = new Transform({
  transform(chunk, encoding, callback) {
    callback(
      null,
      chunk.toString().slice(0, -2).split("").reverse().join("").concat("\r\n")
    );
  },
});

process.stdin.pipe(reverseTr).pipe(process.stdout);
