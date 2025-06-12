type Animal = {
    tag: "animal";
    species: string;
}

type Human = {
    tag: "human";
    name: string;
}

type Robot = {
    tag: "robot";
    name: string;
}

type User = Animal | Human | Robot;

function getUserName(user: User): string {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "이름 없음";
        case "robot":
            return `CPU ${user.name}`;
    }
}

