type User<T> = {
    name: string;
    child: T;
};

type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

const obj: Family<number, string> = {
    mother: 0,
    father: 100,
    child: "1000",
};

const obj2: Family = {
    mother: 0,
    father: 100,
    child: "1000",
};
