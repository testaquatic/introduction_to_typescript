const fizzBuzz = {
    current: 1,
    fizzCount: 0,
    buzzCount: 0,

    next() {
        if (this.current > 100) {
            return {
                done: true
            }
        }

        const fizz = this.fizzCount === 2 ? "Fizz" : "";
        const buzz = this.buzzCount === 4 ? "Buzz" : "";
        const lineTxt = `${fizz}${buzz}` || this.current;
        if (this.fizzCount === 2) {
            this.fizzCount = 0;
        } else {
            this.fizzCount++;
        }
        if (this.buzzCount === 4) {
            this.buzzCount = 0;
        } else {
            this.buzzCount++;
        }
        this.current++;

        return {
            done: false,
            value: lineTxt
        }
    },

    [Symbol.iterator]() {
        return this;
    }
}

let line = "";
for (const fizzBuzzLine of fizzBuzz) {
    if (line) {
        line = `${line} ${fizzBuzzLine}`
    } else {
        line = `${fizzBuzzLine}`
    }
}
console.log(line);