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
    // replace path with no file extension with path to default file
    path = path.replace(/^(\/$|(?:\/(?:(?!.*[.].*)[^\/\n])+)+)\/?$/gm, (_, path) => `${path}/${defaultFile}`);
    // replace > '//' with '/'
    return path.replace(/\/{2,}/, '/');
}
