import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("숫자를 입력해주세요: ", (line) => {
    const num = Number(line);
    const message = 0 <= num && num < 100
        ? `${num}은 0이상 100 미만 입니다.`
        : `${num}은 0이상 100 미만이 아닙니다.`;
    console.log(message);
    rl.close();
});
