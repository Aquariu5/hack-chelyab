export const compareStrings = (str1, str2) => {
    if (str1.toLowerCase() == str2.toLowerCase())
        return true;
    return false;
}

export const stringInArr = (str1, arr) => {
    if (arr.findIndex(el => el == str1) != -1)
        return true;
    return false;
}