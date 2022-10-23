export const groupBy = <T, K extends keyof any>(
    list: T[],
    keyGetter: (i: T) => K,
) => {
    const map = new Map<K, T[]>();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
};
