const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`yes or no - Is ${el1} greater than ${el2}?`, function (answer) {
    // const num1 = parseInt(numString1);
    
    if (answer === 'yes') {
      callback(true);
    } else if (answer === 'no') {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr,i,madeAnySwaps,outerBubbleSortLoop){
  if (i < arr.length -1){
    askIfGreaterThan(arr[i],arr[i+1],function (isGreaterThan){
      if (isGreaterThan){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        madeAnySwaps = true;
        innerBubbleSortLoop(arr,i+1,madeAnySwaps,outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  } else if (i === (arr.length-1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
};

// let arr = [1,2,3,4];

// innerBubbleSortLoop(arr,0,false,function(){
//   console.log("Hey, you're in the outer bubble sort");
// })
  

function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true){
      innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
    } else if (madeAnySwaps === false) {
      sortCompletionCallback(arr);
    }
  };
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});