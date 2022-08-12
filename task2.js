//Напишите функцию, которая принимает на входе любое число (но не больше 1 000), 
//определяет, является ли оно простым, и выводит, простое число или нет. 
//Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
function primeNumberDefinition(number) {
    let i = 1;
    while (i <= 1000) {
      let result = number % i;
      if (result !== 0) {
        i = i + 1;
        
      } else if (result === 0 && number !== i && (number === 1 || number === 0)) {
        return console.log('Число не является простым');
      } else if (number > 1000) {
        return console.log('Данные неверны');
      } else if (number === 1) {
        return console.log('Число не является простым');
      } else {
        return console.log('Число простое');
        
      }
    }
  };
  
  primeNumberDefinition();