class User<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.#age = age;
        this.data = data;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}

const uhyo = new User<string>("uhyo", 26, "추가데이터");
const data = uhyo.data;

const john = new User("John Smith", 15, { num: 123 });
const data2 = john.data;

type MyUserConstructor = {
    new (name: string, age: number, data: string): User<string>;
}

const MyUser: MyUserConstructor = User;

const u = new MyUser("uhyo", 26, "추가데이터");

console.log(u.name, u.data);

