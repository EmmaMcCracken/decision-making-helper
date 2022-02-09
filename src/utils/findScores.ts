import { StateI } from "./Interfaces";

// I'm not sure if it would be better to write a function findScore, which finds the score for a single choice, or findScores, which finds the score for all of the choices. In an attempt to reduce computation, I will implement findScores.

export default function findScores(state: StateI): number[] {
  const weightingsArr = state.attributes.map(
    (attribute) => attribute.weighting
  );

  const scoresArr = [];

  for (let choice of state.choices) {
    const choiceWeightings = choice.weightings;
    const score =
      Math.round(dotProduct(weightingsArr, choiceWeightings) * 10) / 10;
    scoresArr.push(score);
  }

  return scoresArr;
}

function dotProduct(a: number[], b: number[]): number {
  return a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
}
