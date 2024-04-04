let current_users: string[] = ['john', 'alice', 'bob', 'dave', 'emma'];
let new_users: string[] = ['mike', 'emily', 'Alice', 'dave', 'sarah'];

for (let new_user of new_users) {
    let usernameTaken: boolean = false;

    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }

    if (usernameTaken) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}
