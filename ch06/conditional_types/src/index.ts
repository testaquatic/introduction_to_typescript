type RestArgs<M> = M extends "string" ? [string, string] : [number, number, number];

function func<M extends "string" | "number">(mod: M, ...args: RestArgs<M>): void { 
    console.log(mod, ...args);
}

func("string", "uhyo", "hyo");
func("number", 1, 2, 3);

func("string", 1, 2,);