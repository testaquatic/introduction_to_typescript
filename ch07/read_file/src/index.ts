import { readFile } from "node:fs";

const startTime = performance.now();

readFile("foo.txt", "utf-8", (err, result) => {
    const endTime = performance.now();
    console.log(`${endTime - startTime}ms 걸렸습니다.`);
    console.log(result);
});
console.log("불러오기 시작");