import { open } from "node:fs/promises"
import path from "node:path";
import { fileURLToPath } from "node:url";

async function readFile(): Promise<number> {
    const base = fileURLToPath(import.meta.url);
    const filedir = path.dirname(base);
    const filepath = path.join(filedir, "../1.txt");
    const file = await open(filepath);
    const text = await file.readFile({ encoding: "utf-8" });
    const finds = text.match(/uhyo/ug);
    await timeOut(1000);
    file.close();
    return (finds ? finds.length : 0);
}

const timeOut = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const tasks = [
    readFile(),
    timeOut(1).then(() => {
        throw new Error("timeout");
    })
];

Promise.race([
    tasks
])
    .catch(() => {
        return 0;
    })
    .then((count) => console.log(count));