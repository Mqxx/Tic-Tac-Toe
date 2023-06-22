import { contentTypes } from "./content_types.ts";

export function getContentType(path : string, defaultType : string) : string {
    
    const fileExtenstion = path.replace(/[^\.]+\.([^\.]+)$/, (_, extension : string) => extension.toLowerCase())

    return contentTypes[fileExtenstion] || defaultType;
}
