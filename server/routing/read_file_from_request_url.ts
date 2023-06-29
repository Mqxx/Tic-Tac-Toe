/**
 * 
 * @param requestPath The path of the request
 * @param fallbackPath The fallback path if the request path is not found
 * @returns 
 */
export function readFileFromRequestURL(
    requestPath : string,
    fallbackPath : string
) : Uint8Array {
    try {
        return Deno.readFileSync(requestPath);
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
