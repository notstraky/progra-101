import { error } from "console";

export function printMultiplicationTable(base: number, limit: number = 10): void {

    if (limit <=0) {
        limit = 10;
    }


    for (let i = 1; i <= limit; i++) {
        console.log(base, ' x ', i, ' = ', base * i);
    }

}