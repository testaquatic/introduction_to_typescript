import { open } from "node:fs/promises"
import path from "node:path";
import { fileURLToPath } from "node:url";

(async () => {
    const base = fileURLToPath(import.meta.url);
    const filedir = path.dirname(base);
    const filepath = path.join(filedir, "../1.txt");
    const file = await open(filepath);
    const text = await file.readFile({ encoding: "utf-8" });
    const finds = text.match(/uhyo/ug);
    console.log(finds ? finds.length : 0);
    file.close();
})();
