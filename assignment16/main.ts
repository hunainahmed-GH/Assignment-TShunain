// Original guest list
let guestList: string[] = ["Alice", "Bob", "Charlie", "David"];

// Guest who can't make it
const unableToAttend: string = "Charlie";

// New guest to invite
const newGuest: string = "Eve";

// Print the name of the guest who can't make it
console.log(`${unableToAttend} can't make it to the dinner.`);

// Find the index of the guest who can't make it
const indexToRemove: number = guestList.indexOf(unableToAttend);

// Replace the guest who can't make it with the new guest
if (indexToRemove !== -1) {
    guestList[indexToRemove] = newGuest;
} else {
    console.log(`${unableToAttend} is not in the guest list.`);
}

// Print a second set of invitation messages
console.log("Second set of invitation messages:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList.unshift("Frank");

// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Grace");

// Use append() to add one new guest to the end of the list
guestList.push("Hannah");

// Print a new set of invitation messages
console.log("New set of invitation messages:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
