"use strict";
// Create objects containing items
const object1 = {
    book: "Harry Potter",
    pen: "Blue ballpoint",
    phone: "iPhone 12",
    wallet: "Leather wallet"
};
const object2 = {
    book: "The Lord of the Rings",
    pen: "Black gel pen",
    phone: "Samsung Galaxy S20",
    wallet: "Canvas wallet"
};
// Intentional error: accessing an index of an array that doesn't exist
// Here, I'll try to access an index of an array even though there's no array involved.
// This will produce a TypeScript compilation error.
console.log("Object 1, item at index 4:", object1[4]); // This will cause a compilation error because object1 is not an array
// Print the objects
console.log("Object 1:", object1);
console.log("Object 2:", object2);
