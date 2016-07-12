'use strict';
/* jshint ignore: start */

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

/*
// Seek and Destroy
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
*/
/*
// Where do I belong

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
    var pos = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < num) {
            pos = i;
        } else if(arr[i] === num){
            pos = i;
        } else if(arr[i-1] < num){
            pos = i;
        }
    }
    if(arr[arr.length -1] <= num) {
        pos = arr.length;
    }
    // Find my place in this sorted array.
    return pos;
}

console.log('Expected 1, got ',getIndexToIns([40, 60], 50));
console.log('Expected 2, got ',getIndexToIns([10, 20, 30, 40, 50], 30));
console.log('Expected 3, got ',getIndexToIns([2, 5, 10], 15));
*/
/*
// Caesars Cipher
function rot13(str) { // LBH QVQ VG!
    var pos = 0;
    var arr = str.split('');
    var ret = "";
    arr.forEach(function(value) {
        if(value === ' ' ||  (value.charCodeAt(0) > 90) || ( value.charCodeAt(0) < 64)) {
            ret += value;
        } else {
            pos = value.charCodeAt(0) + 13;
            ret += String.fromCharCode(pos > 90 ? (pos - 26) : pos);
        }
    });
    return ret;
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));
*/

// Sum All Numbers in a Range

// function sumAll(arr) {
//     var init = Math.min(arr[0], arr[1]);
//     var end = Math.max(arr[0], arr[1]);
//     var ret = 0;
//     for (var i = init; i <= end; i += 1) {
//         ret += i;
//     }
//     return ret;
// }
//
// console.log(sumAll([10, 5]));

// Diff Two Arrays

// function diffArray(arr1, arr2) {
//     var newArr = [];
//     arr1.forEach(function (arr) {
//         if (arr2.indexOf(arr) < 0) {
//             newArr.push(arr);
//         }
//     });
//     arr2.forEach(function (arr) {
//         if (arr1.indexOf(arr) < 0) {
//             newArr.push(arr);
//         }
//     });
//     return newArr;
// }
//
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Roman Numeral Converter
// function convertToRoman(num) {
//     var ret = '';
//     while (num > 0) {
//         console.log(num);
//         if (num >= 1000) {
//             ret += 'M';
//             num -= 1000;
//         } else if (num >= 900) {
//             ret += 'CM';
//             num -= 900;
//         } else if (num >= 500) {
//             ret += 'D';
//             num -= 500;
//         } else if (num >= 400) {
//             ret += 'CD';
//             num -= 400;
//         } else if (num >= 100) {
//             ret += 'C';
//             num -= 100;
//         } else if (num >= 90) {
//             ret += 'XC';
//             num -= 90;
//         } else if (num >= 50) {
//             ret += 'L';
//             num -= 50;
//         } else if (num >= 40) {
//             ret += 'XL';
//             num -= 40;
//         } else if (num >= 10) {
//             ret += 'X';
//             num -= 10;
//         } else if (num >= 9) {
//             ret += 'IX';
//             num -= 9;
//         } else if (num >= 5) {
//             ret += 'V';
//             num -= 5;
//         } else if (num >= 4) {
//             num -= 4;
//             ret += 'IV';
//         } else if (num >= 1) {
//             num -= 1;
//             ret += 'I';
//         }
//     }
//     return ret;
// }
//
// console.log(convertToRoman(68));

// Wherefore art thou

// function whatIsInAName(collection, source) {
//     // What's in a name?
//     var arr = [];
//     // Only change code below this line
//     var isThere = false;
//     collection.forEach(function (value) {
//         isThere = true;
//         Object.keys(source).forEach(function (data) {
//             if (value[data] !== source[data]) {
//                 isThere = false;
//             }
//         });
//         if (isThere) {
//             arr.push(value);
//         }
//         // console.log(Object.keys(value));
//     });
//     // Only change code above this line
//     return arr;
// }
//
// console.log(whatIsInAName([
//     {
//         first: 'Romeo',
//         last: 'Montague'
//     }, {
//         first: 'Mercutio',
//         last: null
//     }, {
//         first: 'Tybalt',
//         last: 'Capulet'
//     }], {
//         last: 'Capulet'
//     }
// ));

// Search and Replace

// function myReplace(str, before, after) {
//     var b1 = before.charAt(0);
//     var a1 = after.charAt(0);
//     if (b1 !== before.charAt(0).toLowerCase()) {
//         after = after.split('');
//         after[0] = after[0].toUpperCase();
//         after = after.join('');
//     }
//     return str.replace(before, after);
// }
//
// console.log(myReplace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped'));

// Pig Latin

function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");


/* jshint ignore: end */
