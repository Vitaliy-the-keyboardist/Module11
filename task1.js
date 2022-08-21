let array1 = [4, 5, 7, '123', '$$', 0, null, NaN ];
let resultEven = 0;
let resultOdd = 0;
let zero = 0;
function sortingArray(array) {
  
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      if (array[i] % 2 === 0 && array[i] !== 0){
        resultEven += 1;
      } else if (array[i] % 2 !== 0) {
        resultOdd += 1;
      } else if (array[i] === 0) {
        zero += 1;
      }
    }
  }
  console.log(`${resultEven} четных элементов`);
  console.log(`${resultOdd} нечетных элементов`);
  console.log(`${zero} нулевых элементов`);
};

sortingArray(array1);