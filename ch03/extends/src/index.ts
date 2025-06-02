type HasName = {
    name: string;
};

type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

type Animal = {
    name: string;
};

type Human = {
    name: string;
    age: number;
};

type S = Family<Animal, Human>;
type T = Family<Human, Animal>;

