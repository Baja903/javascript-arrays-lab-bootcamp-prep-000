var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
kittens.unshift("Bob");  
}

function destructivelyRemoveLastKitten(){
kittens.pop();
}

function destructivelyRemoveFirstKitten(){
kittens.shift();
}

function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray;
}