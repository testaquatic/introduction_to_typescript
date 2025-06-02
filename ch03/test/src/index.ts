type User = {
    name: string;
    age: number;
    premiumUser: boolean;
};

const data = `uhyo,26,1
John Smith,17,0
Mary Sue,14,1`;

function parseUser(line: string): User {
    const [name, age, premiumUser] = line.split(",");
    return {
        name,
        age: Number(age),
        premiumUser: premiumUser === "1",
    }
}

function processData(data: string): User[] {
    const users = data.split("\n").map(line => line.trim()).map(parseUser);

    return users;
}

const users = processData(data);


for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})는 프리미엄 사용자입니다.`);
    } else {
        console.log(`${user.name} (${user.age})는 프리미엄 사용자가 아닙니다.`);
    }
}