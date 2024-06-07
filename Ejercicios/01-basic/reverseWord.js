//"hola" ---> "aloh"

function reverseName(word) {
  return word.split("").reverse().join("");
}

const a = reverseName("nohemi");
console.log(a);
