// Returns the index of the maximum value of an array. If there is more than one maximum, then -1 is returned.
export default function indexOfMax(arr: number[]) {
  let maxAt = 0;

  for (let i = 0; i < arr.length; i++) {
    maxAt = arr[i] > arr[maxAt] ? i : maxAt;
  }

  const arrOfMaxs = arr.filter((val) => val === arr[maxAt]);

  if (arrOfMaxs.length > 1) {
    return -1;
  }

  return maxAt;
}
