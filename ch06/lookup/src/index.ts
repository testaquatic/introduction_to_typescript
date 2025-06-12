type Human = {
    type: "human";
    name: string;
    age: bigint;
};

function SetAge(human: Human, age: Human["age"]) {
    return {
        ...human,
        age
    };
}