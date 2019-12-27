var fs = require('fs');

const MAX_LENGTH = 99;
let length = MAX_LENGTH;
const arr = [...new Set(new Array(length).fill('').map(() => Math.ceil(Math.random()*length*100)))];
length = arr.length;

const res1 = Math.floor(Math.random()*length);
let res2;
do {
    res2 = Math.floor(Math.random()*length);
} while (res1 === res2);
const target = arr[res1] + arr[res2];

fs.writeFileSync('001-two-sum-data.js', 'module.exports=' + JSON.stringify({
    target,
    arr,
}));
