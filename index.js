/**
 * Wyznacz medianę wydatków do pierwszej niedzieli (włącznie) każdego miesiąca
(np. dla 2023-09 i 2023-10 są to dni 1, 2, 3 wrz i 1 paź).

Rozwiązanie należy podzielić na dwie funkcje:

solution1 → rozwiązanie niezoptymalizowane (tzw. pierwsza wersja)

solution2 → rozwiązanie zoptymalizowane z użyciem jednej z metod
 */
expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

function getFirstSunday(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const offsetDays = (7 - firstDay.getDay()) % 7;
    return 1 + offsetDays;
}

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
















