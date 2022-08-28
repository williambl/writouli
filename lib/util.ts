import {randomUUID} from "crypto";

export function replace<T>(arr: T[], replaceIf: (value: T) => boolean, replacement: T) {
    return arr.map(it => replaceIf(it) ? replacement : it);
}

export function randomId(): string {
    return `random_id:${randomUUID()}`
}