"use strict";
function make_sandwich(...items) {
    console.log("Sandwich summary:");
    if (items.length === 0) {
        console.log("No items specified for the sandwich.");
    }
    else {
        console.log("Items on the sandwich:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log(""); // Empty line for separation
}
// Call the function three times with different numbers of arguments
make_sandwich('Turkey', 'Cheese', ');
