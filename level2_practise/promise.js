const fs = require('fs')

function promise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            fs.readFile('a.txt', 'utf-8', function (err, data) {
                // console.log(data);
                resolve(data)

            })
        }, 3000)
    })


}

// console.log(promise);

async function main() {
    let value = await promise()
    console.log(value);


}
main()
