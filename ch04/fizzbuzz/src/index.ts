const fizz_buzz = {
    now: 0,
    limit: 100,
    fizz: 3,
    buzz: 5,

    message(): string {
        this.now++;
        this.fizz--;
        this.buzz--;

        let string = "";
        if (this.fizz === 0) {
            string = "Fizz"
            this.fizz = 3;
        }
        if (this.buzz === 0) {
            string = `${string}Buzz`
            this.buzz = 5;
        }
        if (string.length == 0) {
            string = `${this.now}`;
        }
        return string;
    },

    *[Symbol.iterator]() {
        while (this.now < this.limit) {
            yield this.message();
        }
    }
}

for (const message of fizz_buzz) {
    console.log(message);
}

function* sequence(start: number, end: number) {
    const result = Array(end - start + 1);
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

console.log([...sequence(1, 100)]);