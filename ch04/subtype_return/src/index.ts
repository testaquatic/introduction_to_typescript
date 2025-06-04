type HasName = {
    name: string;
};

type HasNameAndAge = {
    name: string;
    age: number;
};


const showName = (obj: HasName) => console.log(obj.name);
const g: (obj: HasNameAndAge) => void = showName;

g({ name: "uhyo", age: 26 });

type UnaryFunc = (arg: number) => number;
type BinaryFunc = (arg1: number, arg2: number) => number;

const double: UnaryFunc = arg => arg * 2;
const add: BinaryFunc = (arg1, arg2) => arg1 + arg2;

const bin: BinaryFunc = double;
console.log(bin(10, 100));

type Obj = {
    func: (arg: HasName) => string;
    method(arg: HasName): string;
}

const something: Obj = {
    func: user => user.name,
    method: user => user.name,
}

const getAge = (user: HasNameAndAge) => String(user.age);

// something.func = getAge;
something.method = getAge;

function sum(nums: readonly number[]): number {
    return nums.reduce((a, b) => a + b, 0);
}

const nums1: readonly number[] = [1, 2, 3, 4, 5];
console.log(sum(nums1));
const nums2 = [1, 2, 3, 4, 5];
console.log(sum(nums2));

function fillZero(nums: number[]): void {
    nums.fill(0);
}

const nums3 = [1, 10, 100];
fillZero(nums3);
console.log(nums3);

const nums4: readonly number[] = [1, 1, 2, 3, 5, 8];
// fillZero(nums4);

type User = { name: string };
type ReadonlyUser = { readonly name: string };

const uhyoify = (user: User) => user.name = "uhyo";

const john: ReadonlyUser = { name: "John Smith" };
// john.name = "Nanashi";

uhyoify(john);
console.log(john.name);