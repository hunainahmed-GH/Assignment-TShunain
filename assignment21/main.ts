// Define the types of items that can be stored in an object
type ItemType = "book" | "pen" | "phone" | "wallet";

// Define a type for the object containing items
type ItemObject = {
    [key in ItemType]: string;
}

// Create objects containing items
const object1: ItemObject = {
    book: "Harry Potter",
    pen: "Blue ballpoint",
    phone: "iPhone 12",
    wallet: "Leather wallet"
};

const object2: ItemObject = {
    book: "The Lord of the Rings",
    pen: "Black gel pen",
    phone: "Samsung Galaxy S20",
    wallet: "Canvas wallet"
};

// Print the objects
console.log("Object 1:", object1);
console.log("Object 2:", object2);
