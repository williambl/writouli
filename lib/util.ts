export function replace<T>(arr: T[], replaceIf: (value: T) => boolean, replacement: T) {
    return arr.map(it => replaceIf(it) ? replacement : it);
}