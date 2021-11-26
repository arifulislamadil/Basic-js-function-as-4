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