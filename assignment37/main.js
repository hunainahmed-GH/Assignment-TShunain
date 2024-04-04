"use strict";
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt('medium');
// Creating a small shirt with a custom message
make_shirt('small', 'Keep coding!');
