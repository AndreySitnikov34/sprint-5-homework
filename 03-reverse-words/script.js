/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {// Объявлена функция с аргументом str (строка)
    return str.split(" ").reverse().join(" ");//Возвращаем (результат) разбиваем str(строку) на массив
    // по разделителю "пробел", запускаем в обратном порядке, и собираем снова в строку с "пробелами".
    // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"