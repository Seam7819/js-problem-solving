function noDuplicateItem (items){
    const uniques = [];
    for(const item of items){
        if(uniques.includes(item)=== false){
            uniques.push(item)
        }
    }
    return uniques;
}

const biryanikhor = ["siam","maidul", "mhr", "firasul","sakib","mehedi","siam","firasul","sakib","mhr"];
const removeDuplicate = noDuplicateItem(biryanikhor);
console.log(removeDuplicate);