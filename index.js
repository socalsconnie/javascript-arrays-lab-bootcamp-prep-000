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
   newKittens = kittens.push(name)
  return newKittens
}

function prependKitten(name) {
   newKittens = kittens.unshift(name)
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.pop()
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.shift()
  return newKittens
}
