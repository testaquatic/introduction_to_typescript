const secret = process.env["SECRET"] ?? "default";
const secret2 = process.env["SECRET2"] ?? "default";

console.log(`secret은 ${secret}입니다.`);
console.log(`secret2는 ${secret2}입니다.`);