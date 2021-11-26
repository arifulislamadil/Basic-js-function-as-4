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