const input = await Deno.readTextFile("./input/2.txt")

type Play = {
  key: string
  score: number
}

const conditions = {
  win: [
    ["A", "C"], // rock vs scissors
    ["B", "A"], // paper vs rock
    ["C", "B"], // scissors vs paper
  ],
  draw: [
    ["A", "A"], // rock vs rock
    ["B", "B"], // paper vs paper
    ["C", "C"], // scissors vs scissors
  ],
  loss: [
    ["A", "B"], // rock vs paper
    ["B", "C"], // paper vs scissors
    ["C", "A"], // scissors vs rock
  ],
}

const convertPlay = (abcxyz: string): Play => {
  switch (abcxyz) {
    case "A":
    case "X":
      return { key: "A", score: 1 }

    case "B":
    case "Y":
      return { key: "B", score: 2 }

    case "C":
    case "Z":
      return { key: "C", score: 3 }

    default:
      return { key: "", score: 0 }
  }
}

const getScore = (abc: string, xyz: string) => {
  const play = convertPlay(xyz)
  const win = conditions.win.map((item) => item[0] === play.key && item[1] === abc).includes(true)
  const draw = conditions.draw.map((item) => item[0] === play.key && item[1] === abc).includes(true)
  const loss = conditions.loss.map((item) => item[0] === play.key && item[1] === abc).includes(true)

  return play.score + (win ? 6 : draw ? 3 : loss ? 0 : 0)
}

const pickPlay = (abc: string, res: string) => {
  switch (res) {
    case "X": // need to lose
      switch (abc) {
        case "A":
          return "C"
        case "B":
          return "A"
        case "C":
          return "B"
        default:
          return ""
      }

    case "Y": // need to draw
      switch (abc) {
        case "A":
          return "A"
        case "B":
          return "B"
        case "C":
          return "C"
        default:
          return ""
      }

    case "Z": // need to win
      switch (abc) {
        case "A":
          return "B"
        case "B":
          return "C"
        case "C":
          return "A"
        default:
          return ""
      }

    default:
      return ""
  }
}

const plays = input.split("\n")

/* part 1 */
let score1 = 0
for (let i = 0; i < plays.length; i++) {
  const game = plays[i].split(" ")
  const a = game[0]
  const b = game[1]
  score1 += getScore(a, b)
}

console.log("score part 1:", score1)

/* part 2 */
let score2 = 0
for (let i = 0; i < plays.length; i++) {
  const game = plays[i].split(" ")
  const a = game[0]
  const r = game[1]
  const b = pickPlay(a, r)
  score2 += getScore(a, b)
}

console.log("score part 2:", score2)
