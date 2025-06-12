type SignType = "plus" | "minus";
function signNumber(type: SignType): 1 | -1 {
    return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none"): number {
    if (type === "none") {
        return 0;
    } else {
        return num * signNumber(type);
    }
}

console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));