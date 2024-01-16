const inputNumber = process.argv[2]

if(!Number(inputNumber)){
  console.log('This is nos a number');
}

const components = inputNumber.split("")
const exp = inputNumber.length
const sumResult = components.reduce(
  (sum, numDigit) => sum + Number(numDigit ** exp),
  0,
)

if(sumResult === Number(inputNumber)){
  console.log('This number an Armstrong Number')
} else {
  console.log('NOT a Armstrong Number')
}
