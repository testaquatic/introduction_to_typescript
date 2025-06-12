type Animal = {
    species: string;
};

type Human = {
    name: string;
};

type User = Animal | Human;

const nabi: User = {
    species: "Felis silverstris catus",
};

const uhyo: User = {
    name: "Uhyo",
};
