import { StateI } from "./Interfaces";

export default function findScores(state: StateI): number[] {
  // creates an array of attribute weightings between 0 and 1
  const weightingsArr = state.attributes.map(
    (attribute) => attribute.weighting
  );

  const scoresArr = [];

  for (let choice of state.choices) {
    const choiceWeightings = choice.weightings;
    // score is found to 1 decimal place
    const score =
      Math.round(dotProduct(weightingsArr, choiceWeightings) * 10) / 10;
    scoresArr.push(score);
  }

  return scoresArr;
}

function dotProduct(a: number[], b: number[]): number {
  return a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
}
