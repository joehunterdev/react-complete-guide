export function cleanText(text) {
    
    // Remove leading and trailing white space
    text = text.replace('"', "")
    .replace(/\\n/g, "")
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
    
    return text;
}
