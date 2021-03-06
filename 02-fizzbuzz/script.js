/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz; //Зачем здесь неразрывный пробел? &nbsp
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        // Проверяем, кратно ли число 3 и 5
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz'); //Выводим в консоль результат
        } // Проверяем, кратно ли число 3
        else if(i % 3 === 0) {
            console.log('fizz'); //Выводим в консоль результат
        } // Проверяем, кратно ли число 5
        else if(i % 5 === 0) {
            console.log('buzz'); //Выводим в консоль результат
        } else {
            console.log(i); //Выводим в консоль результат
        }
    }// Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));