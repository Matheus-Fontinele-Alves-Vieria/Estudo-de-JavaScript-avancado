const numbs = [2, 4, 6, 8];

function multply(...args) {
    return args.reduce((acum, value) => acum * value, 1);
}

console.log(multply(...numbs));

// --------------------------------------------------------------

const myArguments = 'Olá, Mundo!';

function  logArgs(...args) {
    console.log(args);
}

function LengArgs(...args) {
    console.log(args.length);
}

logArgs(...myArguments);
LengArgs(...myArguments);