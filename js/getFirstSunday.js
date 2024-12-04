function getFirstSunday(year, month) {
    return 7 - (new Date(year, month - 1, 1).getDay() || 7);
}

export default getFirstSunday;