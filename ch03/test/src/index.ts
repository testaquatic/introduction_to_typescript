type User = {
    name: string;
    age: number;
    premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const regexp = /^([\w ]+),(\d+),(\d)$/gmu;

const matchs = data.matchAll(regexp);

const users = [];
for (const match of matchs) {
    const user: User = {
        name: match[1] ?? "",
        age: Number(match[2]),
        premiumUser: match[3] === '1',
    };
    users.push(user);
}

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})는 프리미엄 사용자입니다.`);
    } else {
        console.log(`${user.name} (${user.age})은 프리미엄 사용자가 아닙니다.`);
    }
}