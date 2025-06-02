type Obj = { foo?: number };
const obj1: Obj = {};
const obj2: Obj = { foo: -1234 };

const { foo = 500 } = obj1;
const { foo: bar = 500 } = obj2;

console.log(foo);
console.log(bar);