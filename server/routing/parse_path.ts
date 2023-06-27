/**
 * This function parses a pathname and appends (if nessesarly) the defaultFile.
 * ```txt
 * request/path/name => request/path/name/index.html
 * request/path/name/ => request/path/name/index.html
 * request/path/name/file.html => request/path/name/file.html
 * request/path/style/styles.css => request/path/style/styles.css
 * ```
 * @param path The pathname of the path to parse
 * @param defaultFile The default filename which should be used
 * @returns The parse pathname
 */
export function parsePath(path : string, defaultFile : string) : string {
    path = path.replace(/\/{2,}/, '/');
    return path.replace(/^(\/$|(?:\/(?:(?!.*[.].*)[^\/\n])+)+)\/?$/gm, (_, path) => `${path}/${defaultFile}`);
}
