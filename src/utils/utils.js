export const checkItems = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  for (const item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }

  return true;
};
