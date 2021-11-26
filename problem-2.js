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