function addEvenNumber(numbers){
    const evens = []
    for(const number of numbers){
        if(number % 2 ===0 ){
            evens.push(number);
        }
    }
    // console.log(evens);
    let sum = 0 ;
    for (const even of evens ){
        sum = sum + even;
    }
    return sum;
}

const enevNumber = [12,23,24,23,45,44,34,26.98,86];
const avg = addEvenNumber(enevNumber);
console.log("avg of even numbers is :" , avg);