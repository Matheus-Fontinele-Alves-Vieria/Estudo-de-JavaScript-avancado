var obj = {
    valeues: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        var i = 0;

        while(i < this.valeues.length) {
            yield this.valeues[i];
            
            i++;
        }
    }
}

for(let value of obj) {
    console.log(value);
}