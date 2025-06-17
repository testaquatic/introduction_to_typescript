import { readFile } from "fs/promises";

const repeat10 = (str: string) => new Promise<string>(
    (resolve) => setTimeout(
        () => resolve(str.repeat(10)),
        1000
    )
);


readFile("foo.txt", "utf-8")
    .then((result) => repeat10(result))
    .then((result) => console.log(result), () => console.log("실패했습니다."));

const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(reject, duration);
    });
}

const p = readFile("foo.txt", "utf-8")
    .then(() => sleepReject(1000))
    .then((result) => console.log(result), () => console.log("실패했습니다."));

import("fs/promises")
    .then(({ readFile }) => readFile("foo.txt", "utf-8"))
    .then((result) => console.log(result))
    .catch((error) => console.log("에러가 발생했습니다!!!!", error));
