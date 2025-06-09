class User {
    static adminUser: User;

    static {
        this.adminUser = new User();
        this.adminUser.#age = 9999;
    }

    #age = 0;



    isAdult(): boolean {
        return this.#age >= 20;
    }

    setAge(age: number): void {
        if (age < 0 || age > 150) {
            return;
        }

        this.#age = age;
    }
}


