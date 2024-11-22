// Ejercicio 9

let heroes2 = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
export function heroesThatStartsWith(heroesArray: string[], letter:string){

    letter = letter.toUpperCase();
    let newHeroesArray: string[] = [];

    for (let i = 0; i < heroesArray.length; i++) {
        if ( heroesArray[i].startsWith(letter)){
            newHeroesArray.push(heroesArray[i]);
        }
    }
    return newHeroesArray;
}


let herosWithLetterS = heroesThatStartsWith( heroes2, 'S' );
console.log('\nEjercicio 9\n' ,herosWithLetterS ); // She Hulk, Spiderman