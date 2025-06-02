type MyObj = {
    readonly foo: boolean,
    bar: boolean,
    baz?: number,
};

const obj: MyObj = { foo: false, bar: true };
const obj2: MyObj = { foo: true, bar: false, baz: 1234 };

console.log(obj.baz);
console.log(obj2.baz);

const num: number = 0;
type T = typeof num;
const foo: T = 123;

const obj3 = {
    foo: 123,
    bar: "hi",
};

type T2 = typeof obj3;
const obj4: T2 = {
    foo: -50,
    bar: "",
}