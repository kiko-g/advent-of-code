const input = await Deno.readTextFile("./input.txt")

let max = 0
const elvesRaw = input.split("\n\n")

for (let i = 0; i < elvesRaw.length; i++) {
  const elf = elvesRaw[i].split("\n")
  const sum = elf.map((item) => parseInt(item)).reduce((acc, value) => acc + value)
  if (sum > max) max = sum
}

console.log(max)
