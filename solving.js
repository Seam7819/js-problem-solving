function AnaToVori(Ana){
    if(Ana !== "number" || Ana <0){
        return "Please Provide valid number"
    }
    const Vori = Ana * 0.0625;
    return Vori;
}

const result = AnaToVori("d");
console.log(result);