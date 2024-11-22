// Ejercicio 5
console.log('\nEjercicio 5\n');
export let numbers2 = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0){
        console.log(numbers2[i] + ' es un numero par');
    } else {
        console.log(numbers2[i] + ' es un numero impar');
    }
}