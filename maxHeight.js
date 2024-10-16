const height = [60,68,66,65,72,75,60,78,56,76,71];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}

const max = getMax(height);
console.log(max);