export function trimWhiteSpaces(text = "") {
    return text.replace(/\s+/g, '');
}

export function trimString(string = "", limit = 0, end = "...") {
    if(string.length > limit) {
        return string.slice(0, limit) + end;
    }

    return string;
}

export function slugString(text = "") {
    return text.toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
}
