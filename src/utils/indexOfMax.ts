// Returns the index of the maximum value of an array. If there is more than one maximum, then -1 is returned.
export default function indexOfMax(scores: number[]) {
  let maxAt = 0;
  // finds maximum score
  for (let i = 0; i < scores.length; i++) {
    maxAt = scores[i] > scores[maxAt] ? i : maxAt;
  }
  // filters scores for all maximums
  const scoresOfMaxs = scores.filter((val) => val === scores[maxAt]);
  // if more than one maximum, return -1
  if (scoresOfMaxs.length > 1) {
    return -1;
  }

  return maxAt;
}
