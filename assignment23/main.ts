let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar'));

console.log("Is car.startsWith('sub')? I predict True.");
console.log(car.startsWith('sub'));

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

console.log("Is car.length < 10? I predict True.");
console.log(car.length < 10);
