import { Transform } from "stream";

const reverseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().split("").reverse().join(""));
  },
});

const transform = async () => {
  process.stdin.pipe(reverseTr).pipe(process.stdout);
};

await transform();
