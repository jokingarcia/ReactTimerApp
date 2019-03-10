/*
function getTempPromise(location){
    return new Promise(function (resolve, reject) {
        setTimeout(function (){
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Philadelphia').then(function (temp){
    console.log('promise success', temp);
}, function (err){
    console.log('promise error', err);
});
*/

//Challenge
function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('param is not a number');
        }
    });
}

addPromise(2, 7).then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
});

addPromise('2', '7').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
});