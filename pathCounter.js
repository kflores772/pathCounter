var input1 = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 1, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1]
    ],
    input2 = [
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1]
    ],
    input3 = [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1]
];

var count = 0,
    pathCounter;

pathCounter = function (arr, row, col) {
    console.log("row: " + row + " col: " + col);
    
    if (row === arr.length-1 && col === arr[0].length-1) {
        count = count+1;
        return;
    }

    if (arr[row][col] && arr[row][col+1]) {
        pathCounter(arr, row, col+1);
    }
    
    if (arr[row][col] && arr[row+1]) {
        pathCounter(arr, row+1, col);
    } 
}

pathCounter(input1, 0, 0);
console.log("count: " + count);

