export function getFirstAndLastKeyInMap<K, T>(map: Map<K, T>) {
  const arrayMap = Array.from(map);
  return {
    firstKey: arrayMap[map.size - 1][0],
    lastKey: arrayMap[0][0]
  }
};

export function getInputDefaultValue<T extends string, N extends string>(
  defaultValue: string | number | Record<T, string | boolean | number> | undefined,
  name: N
): string | undefined {
  if (!defaultValue) {
    return;
  }

  if (typeof defaultValue === 'string' || typeof defaultValue === 'number') {
    return defaultValue.toString();
  };

  return defaultValue[name]?.toString();
};

export function getBooleanInputDefaultValue<T extends string>(
  defaultValue: boolean | Record<T, string | boolean | number> | undefined,
  name: T
): boolean {
  if (!defaultValue) {
    return false;
  };

  if (typeof defaultValue === 'boolean') {
    return defaultValue;
  };

  return defaultValue[name].toString() === 'true';
};
