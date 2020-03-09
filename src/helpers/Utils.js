export function arrayIncludesSorted(array1, array2) {
  if (array1.length > array2.length) return false;
  let isEqual = true;

  for (let i = 0; i < array1.length; i += 1) {
    if (array2[array2.length - i] !== array1[array1.length - i]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}
