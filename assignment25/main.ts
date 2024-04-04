// Version 1: Passes the if test
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version 2: Fails the if test (no output)
alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
