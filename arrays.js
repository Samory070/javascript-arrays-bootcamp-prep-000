chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  let = newArr = array.slice()
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  // let = newArr = array.slice()
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  let = newArr = array.slice()
  newArr.push(element)
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
