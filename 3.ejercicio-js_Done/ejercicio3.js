function decToBin(num){
  return (num >>> 0).toString(2);
}

function binToDec(num){
  let numBinary = num.toString().split('').reverse();
  let numDecimal = 0;
  for (let i = 0; i < numBinary.length; i++) {
          if (Number(numBinary[i]) === 1) {
            numDecimal = numDecimal + 2 ** i;
          }
      }
  return numDecimal;
}

function numBaseConvertor(num, base) {
  if (base === 10) {
      return binToDec(num)
  } else if (base === 2) {
      return decToBin(num);
  }
  return 'Base incorrecta, (Selecciona una base 10 o 2)';
}

// console.log(binToDec(11001101100));
// console.log(decToBin(1));
// console.log(decToBin(2));
// console.log(decToBin(4));
// console.log(decToBin(8));
// console.log(decToBin(16));
// console.log(decToBin(32));
// console.log(decToBin(1644));
// console.log('----------------------------');
// console.log(numBaseConvertor(1644, 2));
// console.log(numBaseConvertor(11001101100, 10));
// console.log(numBaseConvertor(11001101100, 5));
