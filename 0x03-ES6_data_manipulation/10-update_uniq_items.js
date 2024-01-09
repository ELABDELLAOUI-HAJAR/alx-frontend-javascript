export default function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    itemsMap.forEach((value, key) => {
      if (value === 1) { itemsMap.set(key, 100); }
    });
  }
}
