function randomNumber() {
    console.log("Gerando número randomico...");

    return Math.random() * 10;
}

var  multply = (a, b = randomNumber()) => a * b;

console.log(multply(6));
console.log(multply(9));
console.log(multply(6, 9));