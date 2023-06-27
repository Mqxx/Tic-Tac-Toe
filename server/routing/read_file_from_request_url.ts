import { ContentType } from "../type/content_types.ts";
import { responseWithContentType } from "./response_with_content_type.ts";

export function readFileFromRequestURL(
    requestURL : URL,
    contentType : ContentType
) : Response {
    try {
        return responseWithContentType(requestURL.pathname, contentType);
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            return responseWithContentType(requestURL.pathname, contentType);
        } else {
            return responseWithContentType(requestURL.pathname, contentType);
        }
    }
}
