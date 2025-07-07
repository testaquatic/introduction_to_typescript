function getFizzBuzzString(i: number): string | number {
  let returnString: string = ""
  if (i % 3 === 0) {
    returnString += "Fizz";
  }
  if (i % 5 === 0) {
    returnString += "Buzz";
  }
  if (returnString === "") {
    return i;
  }
  return returnString;
}

function* sequence(start: number, end: number): Generator<number> {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const i of sequence(1, 100)) {
  console.log(getFizzBuzzString(i));
}