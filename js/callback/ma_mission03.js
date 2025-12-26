const myArr = {
    0: 3,
    1: 88,
    2: 76,
    3: 9,
    4: 34,
    5: 65,
    6: 77,
    lenght: 7,
    forEach: function (fn) {
        for (let i = 0; i < this.lenght; i++){
            fn(this[i],i)
        }
    },
    filter: function (fn) {
        const temp = [];
        for (let i = 0; i < this.lenght; i++){
            if (fn(this[i], i)) {
                temp.push(this[i]);
            }
        }
        return temp;        
    },
    map: function (fn) {
        const temp = [];
        for (let i = 0; i < this.lenght; i++){
            temp.push(fn(this[i], i));
            temp[i] = fn(this[i], i);
        }
        return temp; 
    }
};

const arr2 = myArr.map((item) => {
    return item + 2;
});

console.log(arr2); //[5, 90, 78, 11, 36, 67, 79];
