import { readFile } from "fs"

async function main(): Promise<void> {
    const { readFile, writeFile } = await import("fs/promises");

    try {
        const fooContents = await readFile("foo.txt", "utf-8");

        await writeFile("bar.txt", fooContents + fooContents);
        console.log("쓰기가 완료됐습니다.");
    } catch {
        console.log("실패했습니다.");
    }
}

main().then(() => console.log(`main()이 완료됐습니다.`));