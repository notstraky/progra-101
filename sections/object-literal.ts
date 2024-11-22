
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['movies', 'music'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
    }
}

// person.toString();


let car = {
    brand: 'Nissan',
    model: 'GTR R35',
    year: 2024
}

let smartTv = {
    brand: 'LG',
    isPowered: false,
    sizeInches: '32"'
}

let youtubeVideo = {
    likes:400,
    length: 3.4,
    year:2023,
    comments: ['Un tio chill de cojones']
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);