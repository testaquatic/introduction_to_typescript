function map<T, U>(array: T[], callback: (item: T) => U): U[] {
    const result: U[] = Array(array.length);
    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i]);
    }
    return result;
}

const data = [1, 1, 2, 3, 5, 8, 13];

const reuslt = map(data, x => x * 10);

const data2 = [1, -3, -2, 8, 0, -1];
const resut2 = map(data2, (x) => x >= 0);

console.log(reuslt);
console.log(resut2);