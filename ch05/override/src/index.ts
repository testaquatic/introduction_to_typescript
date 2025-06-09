class User {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 20;
    }

    public isChild(): boolean {
        return !this.isAdult();
    }
}

class PremiumUser extends User {
    rank: number = 1;

    public override isAdult(): boolean {
        return this.age >= 10;
    }
}
