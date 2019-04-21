var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function appendKitten(name){
  var newArray = kittens.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push(name)
  return newArray