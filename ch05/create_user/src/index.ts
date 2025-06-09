class User {
    readonly #name: string;
    readonly #age: number;

    constructor(name: string, age: number) {
        if (name === "") {
            throw new Error("이름은 비워둘 수 없습니다!");
        }
        this.#name = name;
        this.#age = age;
    }

    public getMessage(message: string): string {
        return `${this.#name} (${this.#age}) '${message}'`
    }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.getMessage("안녕하세요."));

function createUser(name: string, age: number): (message: string) => string {
    return (message: string): string => `${name} (${age}) '${message}'`;
}

const getMessage = createUser("uhyo", 26);
console.log(getMessage("안녕하세요."));