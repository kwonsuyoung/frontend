const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    lenght: 6,
    'forEach': function (fn) {
        for (let i = 0; i < this.lenght; i++){
            fn(this[i],i)
        }
    },
    'filter': function (fn) {
        const temp = [];

        for (let i = 0; i < this.lenght; i++){
            // const result = fn(this[i], i);

            // if (result) {
            //     temp.push(this[i]);
            // }

            if (fn(this[i], i)) {
                temp.push(this[i]);
            }
        }

        return temp;        
    }
};


const arr2 = myArr.filter((item, i) => item <= 70);
console.log(arr2); //[3, 9, 34, 65];
