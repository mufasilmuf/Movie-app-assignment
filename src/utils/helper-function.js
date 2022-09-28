export function trimStr(str, l, separator) {
    if (str.length > l) {
        return str.substr(0, str.lastIndexOf(separator, l));
    }
    return str
}