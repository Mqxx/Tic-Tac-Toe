/**
 * This function takes a path and returns the read text file. If the file is not found,
 * than the fallback path is read. If the fallback path also is not found than an error gets returned.
 * @param path The path of the request
 * @param fallbackPath The fallback path if the request path is not found
 * @returns The read text file.
 */
export function readFileFromRequestURL(
    path : string,
    fallbackPath : string
) : Uint8Array {
    try {
        return Deno.readFileSync(path);
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            try {
                return Deno.readFileSync(fallbackPath);
            } catch (error) {
                return error;
            }
        } else {
            return error;
        }
    }
}
