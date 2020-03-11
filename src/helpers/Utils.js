function arrayIncludesSorted(array1, array2) {
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

function objCompare(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  keys1.forEach(key1 => {
    if (!obj2[key1] || obj1[key1] !== obj2[key1]) {
      return false;
    }
  });

  return true;
}

export { arrayIncludesSorted, objCompare };
