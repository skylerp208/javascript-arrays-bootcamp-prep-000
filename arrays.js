var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles',]
var mars = 'mars bar'
function addElementToBeginningOfArray(array, element) {
  return [ element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}


function addElementToEndOfArray(array, element) {
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
}
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  return array.shift(element)
}


function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}




