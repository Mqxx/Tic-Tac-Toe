import { ContentKey, ContentType, contentTypes } from "./content_types.ts";

/**
 * This function parses a path and returns the content-type corresponding to the path.
 * @param path The pathname of the path to parse
 * @param defaultType The default content-type which should be used
 * @returns The content-type corresponding to the file
 */
export function getContentType(path : string, defaultType : ContentKey) : ContentType {
    
    const fileExtenstionFromPath = path.replace(
        /[^\.]+\.([^\.]+)$/,
        (_, extension : string) => extension.toLowerCase()
    );

    if (fileExtenstionFromPath in contentTypes) {
        return contentTypes[fileExtenstionFromPath as ContentKey]
    }

    return contentTypes[defaultType];
}
