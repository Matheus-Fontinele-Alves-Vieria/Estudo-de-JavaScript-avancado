const interation = {};

const i = interation[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4
}

for(let value of interation) {
    console.log(value);
}