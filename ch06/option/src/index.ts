type None = { tag: "none" };

type Option<T> = None | Some<T>;

// 연습이니 클래스도 넣고 싶어서
class Some<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    // 오 이게 되네
    get tag(): "some" {
        return "some";
    }
}

function showNumbersIfExists(obj: Option<number>): void {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}

function isSome<T>(obj: Option<T>): obj is Some<T> {
    return obj.tag === "some";
}


const four: Option<number> = new Some(4);
showNumbersIfExists(four);
const nothing: Option<number> = { tag: "none" };
showNumbersIfExists(nothing);

function mapOption<T, U>(obj: Option<T>, f: (x: T) => U): Option<U> {
    if (isSome(obj)) {
        return new Some(f(obj.value));
    } else {
        return obj;
    }
}

function doubleOption(obj: Option<number>): Option<number> {
    return mapOption(obj, (x) => x * 2);
}

console.log(doubleOption(four));
console.log(doubleOption(nothing));