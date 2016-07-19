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

// Seek and Destroy
function destroyer(arr) {
    for (var i = 1; i < arguments.length; i++) {
        if (arr.indexOf(arguments[i]) >= 0) {
            arr.splice(arr.indexOf(arguments[i]), 1);
            i--;
        }
    }
    return arr;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Where do I belong

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
    var pos = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            pos = i;
        } else if (arr[i] === num) {
            pos = i;
        } else if (arr[i - 1] < num) {
            pos = i;
        }
    }
    if (arr[arr.length - 1] <= num) {
        pos = arr.length;
    }
    // Find my place in this sorted array.
    return pos;
}

// console.log('Expected 1, got ',getIndexToIns([40, 60], 50));
// console.log('Expected 2, got ',getIndexToIns([10, 20, 30, 40, 50], 30));
// console.log('Expected 3, got ',getIndexToIns([2, 5, 10], 15));

// Caesars Cipher
function rot13(str) { // LBH QVQ VG!
    var pos = 0;
    var arr = str.split('');
    var ret = '';
    arr.forEach(function(value) {
        if (value === ' ' || (value.charCodeAt(0) > 90) || (value.charCodeAt(0) < 64)) {
            ret += value;
        } else {
            pos = value.charCodeAt(0) + 13;
            ret += String.fromCharCode(pos > 90 ? (pos - 26) : pos);
        }
    });
    return ret;
}

// Change the inputs below to test
// console.log(rot13("SERR CVMMN!"));

// Sum All Numbers in a Range

function sumAll(arr) {
    var init = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    var ret = 0;
    for (var i = init; i <= end; i += 1) {
        ret += i;
    }
    return ret;
}
//
// console.log(sumAll([10, 5]));

// Diff Two Arrays

function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function(arr) {
        if (arr2.indexOf(arr) < 0) {
            newArr.push(arr);
        }
    });
    arr2.forEach(function(arr) {
        if (arr1.indexOf(arr) < 0) {
            newArr.push(arr);
        }
    });
    return newArr;
}
//
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// Roman Numeral Converter
function convertToRoman(num) {
    var ret = '';
    while (num > 0) {
        console.log(num);
        if (num >= 1000) {
            ret += 'M';
            num -= 1000;
        } else if (num >= 900) {
            ret += 'CM';
            num -= 900;
        } else if (num >= 500) {
            ret += 'D';
            num -= 500;
        } else if (num >= 400) {
            ret += 'CD';
            num -= 400;
        } else if (num >= 100) {
            ret += 'C';
            num -= 100;
        } else if (num >= 90) {
            ret += 'XC';
            num -= 90;
        } else if (num >= 50) {
            ret += 'L';
            num -= 50;
        } else if (num >= 40) {
            ret += 'XL';
            num -= 40;
        } else if (num >= 10) {
            ret += 'X';
            num -= 10;
        } else if (num >= 9) {
            ret += 'IX';
            num -= 9;
        } else if (num >= 5) {
            ret += 'V';
            num -= 5;
        } else if (num >= 4) {
            num -= 4;
            ret += 'IV';
        } else if (num >= 1) {
            num -= 1;
            ret += 'I';
        }
    }
    return ret;
}
//
// console.log(convertToRoman(68));

// Wherefore art thou

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var isThere = false;
    collection.forEach(function(value) {
        isThere = true;
        Object.keys(source).forEach(function(data) {
            if (value[data] !== source[data]) {
                isThere = false;
            }
        });
        if (isThere) {
            arr.push(value);
        }
        // console.log(Object.keys(value));
    });
    // Only change code above this line
    return arr;
}
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

function myReplace(str, before, after) {
    var b1 = before.charAt(0);
    var a1 = after.charAt(0);
    if (b1 !== before.charAt(0).toLowerCase()) {
        after = after.split('');
        after[0] = after[0].toUpperCase();
        after = after.join('');
    }
    return str.replace(before, after);
}
//
// console.log(myReplace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped'));

// Pig Latin

function translatePigLatin(str) {
    var notIn = 'aeiou'.split('');
    var arr = str.split('');
    var isVowel = false;
    var isCons = false;
    var gotCons = false;
    while (true) {
        if (notIn.indexOf(str.charAt(0)) > -1) {
            isVowel = true;
        } else {
            isCons = true;
            gotCons = true;
        }
        if (isVowel && gotCons) {
            str += 'ay';
            break;
        }
        if (isVowel && !gotCons) {
            str += 'way';
            break;
        } else {
            str = str.substr(1) + arr[0];
            arr[0] = '';
            arr = arr.join('').split('');
        }
        isVowel = false;
        isCons = false;
    }
    return str;
}
//
// console.log('Should be: aliforniacay', 'got: ' + translatePigLatin('california'));
// console.log('Should be: aragraphspay', 'got: ' + translatePigLatin('paragraphs'));
// console.log('Should be: oveglay', 'got: ' + translatePigLatin('glove'));
// console.log('Should be: algorithmway', 'got: ' + translatePigLatin('algorithm'));
// console.log('Should be: eightway', 'got: ' + translatePigLatin('eight'));

// DNA Pairing

function pairElement(str) {
    var arr = str.split('');
    var ret = [];
    arr.forEach(function(elem) {
        let pair = [elem];
        switch (elem) {
            case 'A':
                pair.push('T');
                break;
            case 'T':
                pair.push('A');
                break;
            case 'C':
                pair.push('G');
                break;
            case 'G':
                pair.push('C');
                break;
            default:
                break;
        }
        console.log(pair);
        ret.push(pair);
    });
    return ret;
}
//
// console.log('Should be: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]',
//     '\ngot: ' + pairElement('ATCGA'));

// Missing letters

function fearNotLetter(str) {
    let arr = str.split('');
    var pos = arr[0].charCodeAt(0);
    var ret = undefined;
    arr.forEach(function(value) {
        if (pos === value.charCodeAt(0)) {
            pos += 1;
        } else {
            ret = String.fromCharCode(pos);
        }
    });
    return ret;
}
//
// console.log('Should be: d', 'got: ' + fearNotLetter('abce'));
// console.log('Should be: i', 'got: ' + fearNotLetter('abcdefghjklmno'));
// console.log('Should be: undefined', 'got: ' + fearNotLetter('bcd'));
// console.log('Should be: undefined', 'got: ' + fearNotLetter('yz'));

// Boo who

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return bool === true || bool === false;
}
//
// console.log('Should be: true', 'got: ' + booWho(true));
// console.log('Should be: true', 'got: ' + booWho(false));
// console.log('Should be: false', 'got: ' + booWho([1, 2, 3]));
// console.log('Should be: false', 'got: ' + booWho(1));

// Sonic Boom

function uniteUnique() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        var arr2 = arguments[i];
        arr2.forEach(function(value) {
            if (arr.indexOf(value) < 0) {
                arr.push(value)
            }
        });
    }
    return arr;
}
//
// console.log('Should be: [1, 3, 2, 5, 4]', 'got: ' + uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Convert HTML Entities

function convertHTML(str) {
    // &colon;&rpar;
    var regex = new RegExp('&', 'g');
    str = str.replace(regex, '&​amp;');
    regex = new RegExp('<', 'g');
    str = str.replace(regex, '&​lt;');
    regex = new RegExp('>', 'g');
    str = str.replace(regex, '&gt;');
    regex = new RegExp('"', 'g');
    str = str.replace(regex, '&​quot;');
    regex = new RegExp('\'', 'g');
    str = str.replace(regex, '&​apos;');
    return str;
}
//
// console.log('Should be: Dolce &​amp; Gabbana', 'got: ' + convertHTML("Dolce & Gabbana"));
// console.log('Should be: Hamburgers &​lt; Pizza &​lt; Tacos', 'got: ' + convertHTML("Hamburgers < Pizza < Tacos"));

// Spinal Tap Case
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var regex = new RegExp('[^a-zA-Z]', 'g');
    str = str.replace(regex, ' ');
    regex = new RegExp('[A-Z]', 'g');
    while (str.search(regex) >= 0) {
        str = str.substr(0, str.search(regex)) +
            ' ' +
            str.substr(str.search(regex), 1).toLowerCase() +
            str.substr(str.search(regex) + 1);
        console.log(str);
    }
    regex = new RegExp('  ', 'g');
    str = str.replace(regex, ' ');

    regex = new RegExp(' ', 'g');
    str = str.trim().replace(regex, '-');
    return str.toLowerCase();
}
//
// console.log('Should be: this-is-spinal-tap', 'got: ' + spinalCase('thisIsSpinalTap'));
// console.log('Should be: the-andy-griffith-show', 'got: ' + spinalCase('The_Andy_Griffith_Show'));
// console.log('Should be: teletubbies-say-eh-oh', 'got: ' + spinalCase('Teletubbies say Eh-oh'));

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    var value = 0;
    var fib = 1;
    var aux = 0;
    var ret = 0;
    while (fib <= num) {
        if (fib % 2 !== 0) {
            ret += fib;
        }
        aux = fib;
        fib = fib + value;
        value = aux;
    }
    return ret;
}

// console.log('Should be: 1785', 'got: ' + sumFibs(1000));

// Sum All Primes
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
    console.log('sumPrimes');
    var ret = 0;
    for (var i = 0; i <= num; i++) {
        if (isPrime(i)) {
            ret += i;
        }
    }
    return ret;
}

// console.log(isPrime(2));
// console.log('Should be: 73156', 'got: ' + sumPrimes(977));

// Smallest Common Multiple

function getIntersections(a, b) {
    if (!a || !b) {
        return [];
    }
    var ai = 0,
        bi = 0;
    var result = [];

    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) {
            ai++;
        } else if (a[ai] > b[bi]) {
            bi++;
        } else /* they're equal */ {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }
    return result;
}

function getPrimeFactors(num) {
    var ret = [];
    var temp = 2;
    while (num > 1) {
        if (isPrime(temp)) {
            if (num % temp === 0) {
                ret.push(temp);
                num = num / temp;
            } else {
                temp++;
            }
        } else {
            temp++;
        }
    }
    return ret;
}

function GCD(a, b) {
    var a1 = getPrimeFactors(a);
    var b1 = getPrimeFactors(b);
    var intersection = getIntersections(a1, b1);
    if (intersection.length == 1) {
        return intersection[0];
    } else {
        var ret = 1;
        intersection.forEach(function(value) {
            ret *= value;
        });
        return ret;
    }
}

function LCM(a, b) {
    return (a * b) / GCD(a, b);
}

function getLMC(arr) {
    if (arr.length === 2) {
        return LCM(arr[0], arr[1]);
    } else {
        var temp = LCM(arr[0], arr[1]);
        arr = arr.splice(1);
        arr[0] = temp;
        return getLMC(arr);
    }
}

function smallestCommons(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var numbers = [];
    // getting the pair and odd numbers
    for (var i = min; i <= max; i++) {
        numbers.push(i);
    }
    return getLMC(numbers);
}

// console.log('Should be: 60', 'got: ' + smallestCommons([1, 5]));
// console.log('Should be: 60', 'got: ' + smallestCommons([5, 1]));
// console.log('Should be: 360360', 'got: ' + smallestCommons([1, 13]));
// console.log('Should be: 6056820', 'got: ' + smallestCommons([23, 18]));

// Finders Keepers

function findElement(arr, func) {
    var ret = arr.filter(func);
    return ret[0];
}

// console.log('Should be: 2', 'got: ' +
//     findElement([1, 2, 3, 4], function(num) {
//         return num % 2 === 0;
//     }));

// Drop it

function dropElements(arr, func) {
    var newArray = [];
    var gotTrue = false;
    arr.forEach(function(value) {
        if (func(value)) {
            gotTrue = true;
        }
        if (gotTrue) {
            newArray.push(value);
        }
    });
    // Drop them elements.
    return newArray;
}

// console.log('Should be: [3, 4]', 'got: ' + dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
// console.log('Should be: [1, 0, 1]', 'got: ' + dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
// console.log('Should be: [3, 9, 2]', 'got: ' + dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

// Steamroller

function steamrollArray(arr) {
    var isArray = true;
    var arrRet = [];
    var arrTemp = arr;
    while (isArray) {
        isArray = false;
        arrTemp.forEach(function(value) {
            if (Array.isArray(value)) {
                isArray = true;
                if (value.length > 1) {
                    if (value[0]) arrRet.push(value[0]);
                    var temp = value.splice(1);
                    arrRet.push(temp);
                } else {
                    if (value[0]) arrRet.push(value[0]);
                }
            } else {
                if (value) arrRet.push(value);
            }
        });
        if (isArray) {
            arrTemp = arrRet;
            arrRet = [];
        }
    }
    return arrRet;
}

// console.log('Should be: [1, 3, 4]', 'got: ', steamrollArray([1, [], [3, [[4]]]]));
// console.log('Should be: [1, 2, 3, 4]', 'got: ', steamrollArray([1, [2], [3, [[4]]]]));
// console.log('Should be: ["a", "b"]', 'got: ',  steamrollArray([
//     [
//         ["a"]
//     ],
//     [
//         ["b"]
//     ]
// ]));

// Binary Agents

function binaryAgent(str) {
    var arr = str.split(' ');
    var ret = '';
    arr.forEach(function(value) {
        ret += String.fromCharCode(parseInt(value, 2));
    });
    return ret;
}

// console.log('Should be: "Aren\'t bonfires fun!?" ', 'got: ', binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Everything Be True

function truthCheck(collection, pre) {
    var hasProp = true;
    collection.forEach(function(value) {
        if (!hasCollection(value, pre)) {
            hasProp = false;
        }
    });
    return hasProp;
}

function hasCollection(item, collection) {
    return item[collection];
}

// console.log('Should be: true', 'got: ', truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// console.log('Should be: false', 'got: ', truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

// Arguments Optional

function addTogether() {
    var checkNumber = function(num) {
        if (typeof num !== 'number') {
            return undefined;
        } else return num;
    };
    var arg1 = arguments[0];
    var arg2 = arguments[1];
    if (arg1 && arg2) {
        if (checkNumber(arg1) && checkNumber(arg2)) {
            return arg1 + arg2;
        } else {
            return undefined;
        }
    } else {
        if (checkNumber(arg1)) {
            return function(arg2) {
                if (!checkNumber(arg2)) {
                    return undefined;
                }
                return arg1 + arg2;
            };
        } else {
            return undefined;
        }
    }
}

// console.log('Should be: 5', 'got: ', addTogether(2, 3));
// console.log('Should be: 5', 'got: ', addTogether(2)(3));
// console.log('Should be: undefined', 'got: ', addTogether("http://bit.ly/IqT6zt"));
// console.log('Should be: undefined', 'got: ', addTogether(2, "3"));
// console.log('Should be: undefined', 'got: ', addTogether(2)([3]));

// Validate US Telephone Numbers

function telephoneCheck(str) {
    // Good luck!
    var re = /^1?[\(\s]*[0-9]{3}[-\)\s]*[0-9]{3}[-\s]?[0-9]{4}$/;
    var hasOpen = /[\(]/;
    var hasClose = /[\)]/;
    if (hasOpen.test(str) && !hasClose.test(str) ||
        !hasOpen.test(str) && hasClose.test(str)) {
        return false;
    }
    return re.test(str);
}

// console.log('Should be: true', 'got: ', telephoneCheck("555-555-5555"));
// console.log('Should be: true', 'got: ', telephoneCheck("1 555-555-5555"));
// console.log('Should be: true', 'got: ', telephoneCheck("1 (555) 555-5555"));
// console.log('Should be: true', 'got: ', telephoneCheck("5555555555"));
// console.log('Should be: true', 'got: ', telephoneCheck("555-555-5555"));
// console.log('Should be: true', 'got: ', telephoneCheck("(555)555-5555"));
// console.log('Should be: true', 'got: ', telephoneCheck("1(555)555-5555"));
// console.log('Should be: false', 'got: ', telephoneCheck("5555555"));
// console.log('Should be: true', 'got: ', telephoneCheck("1 555 555 5555"));
// console.log('Should be: true', 'got: ', telephoneCheck("1 456 789 4444"));
// console.log('Should be: false', 'got: ', telephoneCheck("555-5555"));
// console.log('Should be: false', 'got: ', telephoneCheck("1 555)555-5555"));
// console.log('Should be: false', 'got: ', telephoneCheck("123**&!!asdf#"));
// console.log('Should be: false', 'got: ', telephoneCheck("2 757 622-7382"));
// console.log('Should be: false', 'got: ', telephoneCheck("55555555"));
// console.log('Should be: false', 'got: ', telephoneCheck("(6505552368)"));
// console.log('Should be: false', 'got: ', telephoneCheck("2 (757) 622-7382"));
// console.log('Should be: false', 'got: ', telephoneCheck("0 (757) 622-7382"));
// console.log('Should be: false', 'got: ', telephoneCheck("-1 (757) 622-7382"));
// console.log('Should be: false', 'got: ', telephoneCheck("10 (757) 622-7382"));
// console.log('Should be: false', 'got: ', telephoneCheck("27576227382"));
// console.log('Should be: false', 'got: ', telephoneCheck("(275)76227382"));
// console.log('Should be: false', 'got: ', telephoneCheck("2(757)6227382"));
// console.log('Should be: false', 'got: ', telephoneCheck("2(757)622-7382"));
// console.log('Should be: false', 'got: ', telephoneCheck("555)-555-5555"));
// console.log('Should be: false', 'got: ', telephoneCheck("(555-555-5555"));
// console.log('Should be: false', 'got: ', telephoneCheck("(555)5(55?)-5555"));

// Symmetric Difference

function sym() {
    var count = 0;
    var arrTemp = [];
    while (count < arguments.length) {
        arrTemp = diffArrayWithoutDuplicates(arrTemp, arguments[count]);
        count++;
    }
    return arrTemp.sort();
}

function diffArrayWithoutDuplicates(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function(arr) {
        if (arr2.indexOf(arr) < 0) {
            if (newArr.indexOf(arr) < 0) {
                newArr.push(arr);
            }
        }
    });
    arr2.forEach(function(arr) {
        if (arr1.indexOf(arr) < 0) {
            if (newArr.indexOf(arr) < 0) {
                newArr.push(arr);
            }
        }
    });
    return newArr;
}

// console.log('Should be: [3, 4, 5]', 'got:', sym([1, 2, 3], [5, 2, 1, 4]));
// console.log('Should be: [1, 4, 5]', 'got:', sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));

// Exact Change

const PENNY = 0.01;
const NICKEL = 0.05;
const DIME = 0.10;
const QUARTER = 0.25;
const ONE = 1.00;
const FIVE = 5.00;
const TEN = 10.00;
const TWENTY = 20.00;
const ONE_HUNDRED = 100.00;

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var pack = [];
    var ret = '';
    while (change > 0) {
        if (change >= ONE_HUNDRED && cid[8][1] >= ONE_HUNDRED) {
            sum("ONE HUNDRED", ONE_HUNDRED, pack);
            change = change - ONE_HUNDRED;
            cid[8][1] -= ONE_HUNDRED;
            cid[8][1] = Number(cid[8][1].toFixed(2));
        } else if (change >= TWENTY && cid[7][1] >= TWENTY) {
            sum("TWENTY", TWENTY, pack);
            change = change - TWENTY;
            cid[7][1] -= TWENTY;
            cid[7][1] = Number(cid[7][1].toFixed(2));
        } else if (change >= TEN && cid[6][1] >= TEN) {
            sum("TEN", TEN, pack);
            change = change - TEN;
            cid[6][1] -= TEN;
            cid[6][1] = Number(cid[6][1].toFixed(2));
        } else if (change >= FIVE && cid[5][1] >= FIVE) {
            sum("FIVE", FIVE, pack);
            change = change - FIVE;
            cid[5][1] -= FIVE;
            cid[5][1] = Number(cid[5][1].toFixed(2));
        } else if (change >= ONE && cid[4][1] >= ONE) {
            sum("ONE", ONE, pack);
            change = change - ONE;
            cid[4][1] -= ONE;
            cid[4][1] = Number(cid[4][1].toFixed(2));
        } else if (change >= QUARTER && cid[3][1] >= QUARTER) {
            sum("QUARTER", QUARTER, pack);
            change = change - QUARTER;
            cid[3][1] -= QUARTER;
            cid[3][1] = Number(cid[3][1].toFixed(2));
        } else if (change >= DIME && cid[2][1] >= DIME) {
            sum("DIME", DIME, pack);
            change = change - DIME;
            cid[2][1] -= DIME;
            cid[2][1] = Number(cid[2][1].toFixed(2));
        } else if (change >= NICKEL && cid[1][1] >= NICKEL) {
            sum("NICKEL", NICKEL, pack);
            change = change - NICKEL;
            cid[1][1] -= NICKEL;
            cid[1][1] = Number(cid[2][1].toFixed(2));
        } else if (change >= PENNY && cid[0][1] >= PENNY) {
            sum("PENNY", PENNY, pack);
            change = change - PENNY;
            cid[0][1] -= PENNY;
            cid[0][1] = Number(cid[0][1].toFixed(2));
        } else {
            return "Insufficient Funds";
        }
        change = change.toFixed(2);
    }
    // Here is your change, ma'am.
    if (isClosed(cid)) {
        return "Closed";
    } else {
        return pack;
    }
}

function isClosed(arr) {
    var ret = true;
    arr.forEach(function(a) {
        if (a[1] > 0) {
            ret = false;
        }
    });
    return ret;
}

function sum(data, value, arr) {
    var found = false;
    arr.forEach(function(a) {
        if (a[0] === data) {
            found = true;
            a[1] = a[1] + value;
            a[1] = Number(a[1].toFixed(2));
        }
    });
    if (!found) {
        arr.push([data, value]);
    }
}

// console.log('Should be: [["QUARTER", 0.50]]', 'got:', checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log('Should be: "Closed"', 'got:', checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log('Should be: "Closed"', 'got:', checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// Inventory Update

function updateInventory(arr1, arr2) {
    arr2.forEach(function(value2) {
        sum2(value2[1], value2[0], arr1);
    });
    return arr1.sort(sortArray);
}
function sortArray(a, b) {
    return a[1] > b[1];
}
function sum2(data, value, arr) {
    var found = false;
    arr.forEach(function(a) {
        if (a[1] === data) {
            found = true;
            a[0] = a[0] + value;
        }
    });
    if (!found) {
        arr.push([value, data]);
    }
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log('Should be: "Closed"', 'got:', updateInventory(curInv, newInv));
/* jshint ignore: end */
