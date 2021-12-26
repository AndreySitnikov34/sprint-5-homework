/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, sum) {
    arr = arr.sort((a, b) => a - b); //Сначала отсортирую массив по возрастанию
    let start = 0, end = arr.length - 1; //Определю начало и конец массива
    while (start < end) {
        let tmpSum = arr[start] + arr[end];
        if (tmpSum === sum) {
            start++;
            end--;
        } else {
            if (tmpSum < sum) {
                start++;
            } else {
                end--;
            }
        }
    }
}// Напишите код здесь


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false