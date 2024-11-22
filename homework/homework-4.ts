// Ejercicio 4
export let numbers = [1,6,8,4,2,7,10,3,5];
let numMayor = -999999;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numMayor) {
        numMayor = numbers[i];
    }
}
console.log('\nEjercicio 4\n', 'El numero mayor es:', numMayor);
