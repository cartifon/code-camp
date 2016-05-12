/*
function keep(value) {
    return value;
}

function bouncer(arr) {
  return arr.filter(keep);
}

// console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));
*/


function destroyer(arr) {
    for (var i = 1; i < arguments.length; i++) {
        if(arr.indexOf(arguments[i]) >= 0) {
            arr.splice(arr.indexOf(arguments[i]), 1);
            i--;
        }
    }
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
