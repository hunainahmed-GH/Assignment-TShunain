function stripAndPrintName(): void {
    const originalName: string = "\t  \n   John Doe   \t\n";
    
    // Print original name with whitespace
    console.log(`Original Name: "${originalName}"`);

    // Strip whitespace and print the name again
    const strippedName: string = originalName.trim();
    console.log(`Stripped Name: "${strippedName}"`);
}

stripAndPrintName();
