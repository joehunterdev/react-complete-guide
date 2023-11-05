export function cleanText(text) {
    
    // Remove leading and trailing white space and double quotes
    text = text.replace(/"/g, "")
    .replace(/&amp;/g, "and")
    .replace(/\\n/g, "")
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
    
    return text;
}

export function getFilenameFromUrl(url) {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename;
}
