import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("문자열을 입력해 주세요: ", (line) => {
    console.log(`입력된 문자열: ${line}`);
    rl.close();
});