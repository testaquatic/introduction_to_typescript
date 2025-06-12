type HasToString = {
    toString(): string;
};

function useToString(value: HasToString & object) {
    console.log(`value is ${value.toString()}`);
}

useToString(3.14);