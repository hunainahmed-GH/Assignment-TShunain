"use strict";
function stripAndPrintName() {
    const originalName = "\t  \n   John Doe   \t\n";
    // Print original name with whitespace
    console.log(`Original Name: "${originalName}"`);
    // Strip whitespace and print the name again
    const strippedName = originalName.trim();
    console.log(`Stripped Name: "${strippedName}"`);
}
stripAndPrintName();
