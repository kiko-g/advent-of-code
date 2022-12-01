const input = await Deno.readTextFile("./input/1.txt")

const elvesTotals = []
const elvesCaloriesRaw = input.split("\n\n")

for (let i = 0; i < elvesCaloriesRaw.length; i++) {
  const elf = elvesCaloriesRaw[i].split("\n")
  const elfInt = elf.map((item) => (item === "" ? 0 : parseInt(item)))
  const elfTotal = elfInt.reduce((acc, value) => acc + value)
  elvesTotals.push(elfTotal)
}

const totalsDesc = elvesTotals.sort().reverse()

const max = totalsDesc[0]
const totalTop3 = totalsDesc.splice(0, 3).reduce((acc, value) => acc + value)

console.log("Max:", max)
console.log("Top 3 Sum:", totalTop3)
