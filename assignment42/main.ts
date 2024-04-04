function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

let magicianNames: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

let greatMagicians: string[] = make_great(magicianNames);

console.log("Original list of magicians:");
show_magicians(magicianNames);

console.log("\nList of great magicians:");
show_magicians(greatMagicians);
