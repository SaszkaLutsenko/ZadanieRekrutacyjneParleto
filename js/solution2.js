import { getFirstSunday } from "./getFirstSunday";

/**
 * 
 Bardziej efektywne dla dużych zbiorów danych.
 Wymaga więcej przemyśleń i testów, aby obsłużyć wszystkie przypadki.
 */

function solution2(expenses) {
    function quickSelect(arr, k) {
        const pivot = arr[Math.floor(Math.random() * arr.length)];
        const lows = [], highs = [], pivots = [];

        arr.forEach(x => {
            if (x < pivot) lows.push(x);
            else if (x > pivot) highs.push(x);
            else pivots.push(x);
        });

        if (k < lows.length) return quickSelect(lows, k);
        if (k < lows.length + pivots.length) return pivot;
        return quickSelect(highs, k - lows.length - pivots.length);
    }

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

    const mid = Math.floor(allExpenses.length / 2);
    return allExpenses.length % 2 === 1
        ? quickSelect(allExpenses, mid)
        : (quickSelect([...allExpenses], mid - 1) + quickSelect([...allExpenses], mid)) / 2;
}

export default solution2;