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

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const GOOGLE_SEARCH_ID = process.env.NEXT_PUBLIC_SEARCH_CONSOLE;
