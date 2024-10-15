function isLeapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0){
        return true ;
    }else {
        return false
    }
}
const leapyear = isLeapYear(2064);
console.log(leapyear);