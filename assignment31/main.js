"use strict";
let users = ['user1', 'user2', 'user3'];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Printing usernames:");
    for (let user of users) {
        console.log(user);
    }
    // Remove all usernames
    users = [];
}
// Check if the list is empty after removing all usernames
if (users.length === 0) {
    console.log("The list of users is empty.");
}
else {
    console.log("There are still users in the list.");
}
