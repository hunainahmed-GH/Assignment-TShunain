"use strict";
// Original guest list
let guestList = ["Alice", "Bob", "Charlie", "David"];
// Guest who can't make it
const unableToAttend = "Charlie";
// New guest to invite
const newGuest = "Eve";
// Print the name of the guest who can't make it
console.log(`${unableToAttend} can't make it to the dinner.`);
// Find the index of the guest who can't make it
const indexToRemove = guestList.indexOf(unableToAttend);
// Replace the guest who can't make it with the new guest
if (indexToRemove !== -1) {
    guestList[indexToRemove] = newGuest;
}
else {
    console.log(`${unableToAttend} is not in the guest list.`);
}
// Print a second set of invitation messages
console.log("Second set of invitation messages:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
