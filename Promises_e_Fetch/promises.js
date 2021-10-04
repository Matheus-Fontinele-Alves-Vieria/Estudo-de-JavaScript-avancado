const accomplishesSomething = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Primeira execução');
        }, 1000);
    });

const accomplishesSomethingElse = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Segunda execução');
        }, 1000);
    });

Promise.all([accomplishesSomething(), accomplishesSomethingElse()])
    .then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
    });

Promise.all([accomplishesSomething(), accomplishesSomethingElse()])
    .then(data => { 
        console.log(data[0]) 
        console.log(data[1])
    });