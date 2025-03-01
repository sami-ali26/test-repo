function findsum(n) {
    let ans = 0
    for (let i = 0; i < n; i++) {
        ans += i;

    }
    return ans
}
function callingfunciton() {
    console.log(findsum(100))
}
function sleep() {
    let ans = 0
    for (let i = 1; i <= 10000000000; i++) {
        ans++
    }
    console.log(ans);

}
// setTimeout(sleep, 10 * 1000)
// sleep()
// setTimeout(callingfunciton, 2000)
// console.log('hellow sami ali');

const fs = require('fs')
fs.readFile('a.txt', 'utf-8', function (err, data) {
    console.log(data);

})
console.log('From js file ');

let ans = 1

for (let i = 0; i < 100000; i++) {
    ans++

}

console.log('Hello from js file log 2');

