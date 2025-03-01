function callObj(obj) {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let newobj = Object.entries(obj)
    console.log('Original obj', obj);
    console.log('Only keys obj', keys);
    console.log('Only values obj', values);
    console.log('New obj', newobj);

}
callObj({ username: 'sami', age: 18, gender: 'male' })