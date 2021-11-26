//Convert Seer To Mon
function seerToMon(seer) {
    if (typeof seer != "number" || seer < 0) {
        return 'Please input a valid number'; // Identify input validation 
    }
    let mon = seer / 40;
    return mon;
}
// let totalMon = seerToMon(80);
// console.log(totalMon);


//Total Sales Amount 
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if ((shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) || (typeof shirtQuantity != "number") || (typeof pantQuantity != "number") || (typeof shoeQuantity != "number")) {
        return 'You have given a wrong input or negative input'; //neglect wrong input & negative number
    }
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoePrice = 500;

    let shirtTotal = shirtPrice * shirtQuantity;
    let pantTotal = pantPrice * pantQuantity;
    let shoeTotal = shoePrice * shoeQuantity;

    let totalPrice = shirtTotal + pantTotal + shoeTotal;
    return totalPrice;
}
// let setQuantity = totalSales(5, 7, 4);
// console.log(setQuantity);



//Total Delivery Cost
function deliveryCost(productQuantity) {
    if (typeof productQuantity != "number" || productQuantity < 0) {
        return 'You have given a wrong input'; // avoid negative & string input
    }
    let first100Products = 100;
    let second100Products = 80;
    let moreThen200Products = 50;

    if (productQuantity <= 100) {
        const total100Products = first100Products * productQuantity;
        return total100Products;
    }
    else if (productQuantity <= 200) {
        let first100Items = first100Products * 100;
        let second100items = productQuantity - 100;
        let product200total = second100items * second100Products;
        let totalfirstSecond = first100Items + product200total;
        return totalfirstSecond;
    }
    else if (productQuantity > 200) {
        let first100pro = first100Products * 100;
        let restThen100 = productQuantity - 100;
        let second100pro = second100Products * 100;
        let restSecond100Pro = restThen100 - 100;
        let moreThen200items = restSecond100Pro * moreThen200Products;
        let totolMoreThen200 = first100pro + second100pro + moreThen200items;
        return totolMoreThen200;
    }
}
// let setProductQuantity = deliveryCost(203);
// console.log(setProductQuantity);



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






