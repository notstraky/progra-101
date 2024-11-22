// Ejercicio 8
console.log('\nEjercicio 8\n');
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 

export function largestNameOfArray(name: string[]) {
    let largestName = '';
    for ( let i = 0; i < name.length; i ++){
        if (name[i].length > largestName.length) {
            largestName = name[i]; 
        }
    }
    return largestName;
}

let hero = largestNameOfArray( heroes );
console.log( hero );
