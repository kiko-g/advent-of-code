const input = await Deno.readTextFile("./input/1.txt")

const elfCaloriesTotals = []
const elvesCaloriesRaw = input.split("\n\n")

for (let i = 0; i < elvesCaloriesRaw.length; i++) {
  const elfCalories = elvesCaloriesRaw[i].split("\n")
  const elfCaloriesInt = elfCalories.map((item) => (item === "" ? 0 : parseInt(item)))
  const elfCaloriesTotal = elfCaloriesInt.reduce((acc, value) => acc + value)
  elfCaloriesTotals.push(elfCaloriesTotal)
}

const elfCaloriesTotalsSortedDesc = elfCaloriesTotals.sort().reverse()

const max = elfCaloriesTotalsSortedDesc[0]
const top3Total = elfCaloriesTotalsSortedDesc.splice(0, 3).reduce((acc, value) => acc + value)

console.log("Max:", max)
console.log("Top 3 Sum:", top3Total)
