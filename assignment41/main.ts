function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicianNames: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

// Calling the function to show the magician's names
show_magicians(magicianNames);
