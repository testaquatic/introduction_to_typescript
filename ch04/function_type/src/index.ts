const xRepeat = (num: number): string => "x".repeat(num);

type MyFunc = {
    IsUsed?: boolean;
    (arg: number): void;
};

const double: MyFunc = arg => console.log(arg * 2);
double.IsUsed = true;
console.log(double.IsUsed);

double(1000);