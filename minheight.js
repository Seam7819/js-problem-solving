const height = [67,56,57,76,78,55,76,49,59,69];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num <min){
            min = num;
        }
    }
    return min;
}

const min = getMin(height);
console.log(min);