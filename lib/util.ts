export function replace<T>(arr: T[], replaceIf: (value: T) => boolean, replacement: T) {
    return arr.map(it => replaceIf(it) ? replacement : it);
}

export function randomId(): string {
    return `random_id:${randInt(0, 500)}${randInt(0, 500)}`
}

export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function create<T, U>(object: T, source: U): T {
    return Object.assign(Object.create(Object.getPrototypeOf(object)), object, source)
}
