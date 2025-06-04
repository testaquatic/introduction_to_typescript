const obj = {
    double(num: number): number {
        return num * 2;
    },

    double2: (num: number): number => num * 2,
};

console.log(obj.double(2));
console.log(obj.double2(2));

const sum = (base: number, ...args: number[]): number => args.reduce((a, b) => a + b, base);
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(...[1, 2, 3, 4, 5]));

const sum3 = (a: number, b: number, c: number): number => a + b + c;

const nums: [number, number, number] = [1, 2, 3];
console.log(sum3(...nums));

const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
        return str.toUpperCase();
    }
    return str.toLowerCase();
}

console.log(toLowerOrUpper('Hello'));
console.log(toLowerOrUpper('Hello', true));
console.log(toLowerOrUpper('Hello', false));
