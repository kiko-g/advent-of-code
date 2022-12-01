const input = await Deno.readTextFile("./input/1.txt")

let max = 0
const elvesCaloriesRaw = input.split("\n\n")

for (let i = 0; i < elvesCaloriesRaw.length; i++) {
  const elfCalories = elvesCaloriesRaw[i].split("\n")
  const elfCaloriesTotals = elfCalories.map((item) => parseInt(item))
  const sum = elfCaloriesTotals.reduce((acc, value) => acc + value)
  if (sum > max) max = sum
}

console.log(max)
