const sleep = (duration: number) => new Promise<void>((resolve) => setTimeout(resolve, duration));

async function get3(): Promise<number> {
    await sleep(1000)
    return 3;
}

const p = get3();

p.then((num) => console.log(`num is ${num}`));