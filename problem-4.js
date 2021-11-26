//Find maximum character's Frind Name from friend List
function perfectFriend(names) {
    for (let value of names) { // Identify negative input & invalid input
        if (value.length < 0 || typeof value != "string")
            return 'Please input your friend name';
    }

    let hightCaracter = [0];
    for (let value of names) {
        if (value.length > hightCaracter.length) {
            hightCaracter = value;
        }
    }
    return hightCaracter;
}

// let setFriendsName = perfectFriend(['abir', 'alvi', 'Adnan', 'Rafi', 'Era', 'Mim', 'hamim', 'Fahmi']);
// console.log(setFriendsName);



//Right One Correction 
//Find maximum character's Frind Name from friend List
function perfectFriend(names) {
    for (let value of names) { // Identify negative input & invalid input
        if (value.length < 0 || typeof value != "string")
            return 'Please input your friend name';
    }
    let hightCaracter = '';
    for (let value of names) {
        if (value.length == 5) {
            hightCaracter = value;
        }
    }
    return hightCaracter;

}
let setFriendsName = perfectFriend(['abir', 'alvi', 'famida', 'Adnan', 'Rafi', 'Era', 'Mim', 'hamim', 'Fahmi', 'akh']);
console.log(setFriendsName);

