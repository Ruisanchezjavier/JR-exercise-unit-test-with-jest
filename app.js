// const sum = (adden1,adden2) => {
//     return adden1 + adden2;
// }

// module.exports =  sum;

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}


const fromEuroToDollar = aamountInEuros => {
    let aamountInDollars = aamountInEuros * oneEuroIs["USD"];
    return aamountInDollars;
};

const fromDollarToYen = amountInDollars => {
    let amountInEuros = amountInDollars / oneEuroIs["USD"];
    let amountInYen = amountInEuros * oneEuroIs["JPY"];
    return amountInYen;
};

const fromYenToPound = (aamountInYen) => {
         let amountInEuross = aamountInYen / oneEuroIs["JPY"];
        let amountInPounds = amountInEuross * oneEuroIs["GBP"]
         return amountInPounds;
 };
    
    
    module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };