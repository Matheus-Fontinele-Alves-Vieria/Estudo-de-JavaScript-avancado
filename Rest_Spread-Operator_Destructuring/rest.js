function soma(...numbs) {
    return numbs.reduce((acum, num) => acum + num, 0);
}

console.log(soma(0, 1, 1, 2, 3, 5, 8, 13));