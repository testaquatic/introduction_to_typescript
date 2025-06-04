const repeat = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat('a', 5));
console.log(repeat(123, 3));

const utils = {
    repeat<T>(element: T, length: number): T[] {
        const result: T[] = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }
}

const repeat2 = <T extends { name: string; }>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }

    return result;
}

type HasNameAndAge = {
    name: string;
    age: number;
};

console.log(repeat2<HasNameAndAge>({ name: "uhyo", age: 26 }, 3));
// console.log(repeat2<string>("a", 5));

function double<T>(func: (arg: T) => T): (arg: T) => T {
    return (arg: T) => func(func(arg));
}

type NumberToNumber = (arg: number) => number;

const plus2: NumberToNumber = double(x => x + 1);
console.log(plus2(10));