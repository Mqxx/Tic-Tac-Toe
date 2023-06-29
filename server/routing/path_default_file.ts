import { normalizePath } from "./normalize_path.ts";

/**
 * This function takes a path and returns the path fith the default file.
 * If the path is already a path to a file than this path is returned.
 * ```
 * pathDefaultFile('path/to/file.txt', 'default_file.txt') // 'path/to/file.txt'
 * pathDefaultFile('./path/to', 'default_file.txt') // './path/to/default_file.txt'
 * ```
 * @param path The path to add the default file to
 * @param defaultFile The default file
 * @returns The new path with the default file
 */
export function pathDefaultFile(path : string, defaultFile : string) {
    const regExMatchValidPath = /(.+(?<!\.[^/]+)$)/
    return normalizePath(path.replace(
        regExMatchValidPath,
        (
            _,
            path
        ) => {
            return path + '/' + defaultFile;
        }
    ));
}
