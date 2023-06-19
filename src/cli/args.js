import * as process from "process";

const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];
  args.forEach((value, index) => {
    if (index % 2 === 0) {
      result.push(`${value.slice(2)} is ${args[index + 1]}`);
    }
  });
  console.log(result.join(", "));
};

parseArgs();
