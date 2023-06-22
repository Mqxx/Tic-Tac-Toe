export function parsePath(path : string, defaultFile : string) : string {
    return path.replace(/^((?:\/?[^\.\n\/]+)*)\/?$/gm, (_, group1) => `${group1}/${defaultFile}`);
}
