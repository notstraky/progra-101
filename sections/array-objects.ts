export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}


let andrew: Person = {
    name: 'Andrew',
    age: 36,
    isActive: true
}


let anderson: Person = {
    age: 15,
    isActive: false,
    name: 'Anderson'
}
let people: Person[] = [andrew, anderson];

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}