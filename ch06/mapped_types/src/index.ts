type Fruit = "apple" | "orange" | "banana";

type FruitNumber = {
    [P in Fruit]: P[];
}
