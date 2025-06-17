const p = new Promise<number>((resolve) => {
    setTimeout(() => {
        resolve(100)
    }, 3000)
});

p.then((num) => {
    console.log(`결과는 ${num}`);
});

const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`time out! ${duration}`));
        }, duration);
    });
};

sleepReject(3000).catch((err: Error) => {
    console.log(err.message);
});