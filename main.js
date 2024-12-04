import solution1 from "./js/solution1";
import solution2 from "./js/solution2";

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

console.log(solution1(expenses)); 
console.log(solution2(expenses)); 







