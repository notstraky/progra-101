// Ejercicio 6
console.log('\nEjercicio 6\n');
for (let i = 1; i <= 5; i++){
    
    let line = '';

    for (let j = 1; j <=5; j++) {
        line += ` ${j * i}`;
    }

    console.log( line );
}