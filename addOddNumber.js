function addOddNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 ===1){
            console.log(number);
        }
        sum = sum + number;
    }
    return sum;
}

const numbers = [12,23,234,34,345,43,45,67,65,44,43,67,88];
const avg = addOddNumbers(numbers);
console.log("avg numbers is" , avg);