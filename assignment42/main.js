"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
let magicianNames = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
let greatMagicians = make_great(magicianNames);
console.log("Original list of magicians:");
show_magicians(magicianNames);
console.log("\nList of great magicians:");
show_magicians(greatMagicians);
