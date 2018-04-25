const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newKittens = [...kittens]
  newKittens = newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  var newKittens = [...kittens]
  newKittens = newKittens.unshift(name)
   return newKittens
}

function removeLastKitten() {
  var newKittens = [...kittens]
  newKittens = newKittens.pop()
  return newKittens
}

function removeFirstKitten() {
  var newKittens = [...kittens]
  newKittens = newKittens.shift()
  return newKittens
}
