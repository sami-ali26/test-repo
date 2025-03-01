function wait(n) {
    return new Promise(function (resolves) {
        setTimeout(resolves('hi there '), n)
    })
}

wait(4000).then(function (val) {
    console.log(val);

})