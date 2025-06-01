const fizz_buzz = {
    fizz: 1,
    buzz: 1,
    number: 1,

    nextTurn() {
        this.number++;
        this.buzz++;
        this.fizz++;
    },

    print() {
        let line = "";
        if (this.fizz === 3) {
            line = "Fizz";
            this.fizz = 0;
        }
        if (this.buzz === 5) {
            line = `${line}Buzz`;
            this.buzz = 0;
        }
        line = line || `${this.number}`;

        return line;
    },

    fizzBuzz() {
        return this;
    }
};

let printLine = "";
for (const fz = fizz_buzz.fizzBuzz(); fizz_buzz.number <= 100; fizz_buzz.nextTurn()) {
    printLine = `${printLine} ${fizz_buzz.print()}`;
}
printLine = printLine.trimStart();
console.log(printLine);