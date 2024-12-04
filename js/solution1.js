import { getFirstSunday } from "./getFirstSunday";


/**
 * 
  Prostsza implementacja.
  Nadaje się do mniejszych zbiorów danych.
 */

function solution1(expenses) {
    let allExpenses = [];

    for (const [yearMonth, days] of Object.entries(expenses)) {
        const [year, month] = yearMonth.split("-").map(Number);
        const firstSunday = getFirstSunday(year, month);

        Object.entries(days)
            .filter(([day]) => parseInt(day, 10) <= firstSunday)
            .forEach(([, categories]) => {
                Object.values(categories).forEach(expenseList => {
                    allExpenses.push(...expenseList);
                });
            });
    }

    if (!allExpenses.length) return null;

    allExpenses.sort((a, b) => a - b);
    const mid = Math.floor(allExpenses.length / 2);

    return allExpenses.length % 2 === 1
        ? allExpenses[mid]
        : (allExpenses[mid - 1] + allExpenses[mid]) / 2;
}

export default solution1;