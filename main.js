//Problem 1, Solution 1 with an array.
function sumArr(arrA, arrB) {
    var sum = 0;
    var sumB = 0;
    var CommonElement='';
    for (var i = 0; i < arrA.length; i++) {
        var equal = false;
        for (var j = 0; j < arrB.length; j++) {
            if (arrB[j] === arrA[i]) {
                equal = true;
                CommonElement+=arrB[j]+'';
                break;
            }
        }
        if (equal === false) {
            sum += arrA[i];
        }

    }
    for (var i = 0; i < arrB.length; i++) {
        var equal = false;
        for (var j = 0; j < arrA.length; j++) {
            if (arrA[j] === arrB[i]) {
                equal = true;
                break;
            }
        }
        if (equal === false) {
            sumB += arrB[i];
        }

    }
    console.log('Sum of overlapping elements: ',sum+sumB,'\n');
    console.log('Explanation: Common elements are: ',CommonElement);
}
console.log(sumArr([12, 13, 6, 10],[13, 10, 16, 15]));
