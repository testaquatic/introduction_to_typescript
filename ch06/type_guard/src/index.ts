function isStringOrNumber(value: unknown): value is string | number {
    return typeof value === 'string' || typeof value === 'number';
}

const something: unknown = 12;

if (isStringOrNumber(something)) {
    console.log(something.toString());
}

type Human = {
    type: "Human";
    name: string;
    age: number;
};

function isHuman(value: any): value is Human {
    if (value == null) {
        return false
    }
    return (
        value.type === "Human" &&
        typeof value.name === "string" &&
        typeof value.age === "number"
    );
}

function assertHuman(value: any): asserts value is Human {
    if (value == null) {
        throw new Error("Given value is null or undefined");
    }

    if (
        value.type !== "Human" ||
        typeof value.name !== "string" ||
        typeof value.age !== "number"
    ) {
        throw new Error("Given value is not a human");
    }
}