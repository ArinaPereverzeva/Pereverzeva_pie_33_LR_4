// Получаем элемент кнопки по его ID
document.getElementById('calculateButton').onclick = function () {
    // Получаем значение из текстового поля и преобразуем его в целое число
    let N = parseInt(document.getElementById('numberInput').value);
    
    // Проверка, что N больше 0
    if (N > 0) {
        let sum = 2; // Начинаем сумму с 2
        // Цикл от N + 1 до 2N
        for (let i = N + 1; i <= 2 * N; i++) {
            sum += i * i; // Добавляем квадрат текущего числа к сумме
        }
        // Выводим полученную сумму в div с ID 'result'
        document.getElementById('result').innerHTML = "Сумма: " + sum;
    } else {
        // Если N не больше 0, выводим сообщение об ошибке
        document.getElementById('result').innerHTML = "Введите значение N (> 0).";
    }
};

