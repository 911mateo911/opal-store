export function getFirstAndLastKeyInMap<K, T>(map: Map<K, T>) {
  const arrayMap = Array.from(map);
  return {
    firstKey: arrayMap[map.size - 1][0],
    lastKey: arrayMap[0][0]
  }
};
