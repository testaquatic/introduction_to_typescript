function map<T, U>(array: T[], callback: (val: T) => U): U[] {
  const newArray: U[] = [];
  for (const number of array) {
    const ret = callback(number);
    newArray.push(ret);
  }

  return newArray;
}

const data = [1, 1, 2, 3, 5, 8, 13];

const result = map(data, (x) => x * 10);

console.log(result);