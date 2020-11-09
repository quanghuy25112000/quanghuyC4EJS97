function findOppositeNumber(n,inputNumber){
    if(inputNumber<=n/2) return n/2+inputNumber;
    else return inputNumber-n/2;
}
console.log(findOppositeNumber(10,9));