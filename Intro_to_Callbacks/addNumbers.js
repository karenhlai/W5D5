const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback){
  // if (numsLeft === 0) {
  //   completionCallback(sum);
  // }

  // if (numsLeft > 0) {
    reader.question("give us yo numba", function (answer) {
      const num = parseInt(answer);
      sum += num;
      console.log(sum);
      // addNumbers(sum, (numsLeft-1), completionCallback);
      reader.close();
    });
  // }
}

// console.log(`Danks fo yo numba B`);
addNumbers(0, 1, sum => {
  console.log(`Yo Total Sum B: ${sum}`);
  reader.close();
});

// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);

//   // Close the reader, which will allow the program to end because it
//   // is no longer waiting for any events.
//   reader.close();
// });

// console.log("Last program line");