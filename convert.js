function milesToKilometre(miles) {
    const kilo = miles * 1.60934 ;
    return kilo
}
const result = milesToKilometre(15);
// console.log(result);

function inchToFeet (inch) {
    const feet = inch / 12;
    const feetResult = parseInt(feet)
    const inchResult = inch % 12;
    const result = feetResult + " ft " + inchResult + "inch"
    return result
}

const covertNum = inchToFeet(75);
console.log(covertNum);