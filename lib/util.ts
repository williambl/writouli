export function replace<T>(arr: T[], replaceIf: (T) => boolean, replacement: T) {
    return arr.map(it => replaceIf(it) ? replacement : it);
}