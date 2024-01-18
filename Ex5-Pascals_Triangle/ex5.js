const numberOfRows = process.argv[2]
const numOfInput = Number(numberOfRows)
if(!numOfInput || numOfInput < 0){
  console.log('This is not a positive number');
  return;
}

function newArray(numberOfElements) {
  const newArrayOfNElements = [];
  newArrayOfNElements.length = numberOfElements;
  newArrayOfNElements[0] = 1;
  newArrayOfNElements[numberOfElements - 1] = 1;
  return newArrayOfNElements;
}

function pascalTriangleNewRow(prevArray){
  const prevLength = prevArray.length;
  const pascalTRow = newArray(prevLength + 1)
  for(let index = 1; index < prevLength; index++){
    pascalTRow[index] = prevArray[index - 1] + prevArray[index]
  }
  return pascalTRow;
}

function PascalTriangle(numberOfRows){
  const PascalTriangle = [[1]]
  let row = 1;
  while(row <= numberOfRows){
    const previousRow = PascalTriangle[row - 1];
    const newRow = pascalTriangleNewRow(previousRow);
    PascalTriangle[row] = (newRow);
    row++;
  }
  return PascalTriangle;
}

const result = PascalTriangle(numOfInput);
console.log(result)