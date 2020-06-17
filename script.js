'use strict';

/*
Используйте функции alert, confirm, prompt для общения с пользователем.

"Загадывание случайного числа от 1 до 100"
Что должна делать программа:
— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается.
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число должно храниться «в замыкании»
 */

const gameBot = function () {
  //Проверка, являются ли введенные данные- числом.
  const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };
  //Создание функции случайного числа
  let createRandomNumber = () => {
    return Math.ceil(Math.random() * 100);
  };
  //Вызов случайного числа и присвоение результата переменной
  let botNumber = createRandomNumber();
  console.log('botNumber: ', botNumber);


  let getUserResponse = () => {
    let usersResponse = prompt('Угадай число от 1 до 100');

    if (usersResponse === null) {
      //— если пользователь нажимает "Отмена", то игра заканчивается.
      alert('Game over');
      console.log('Game over');
      return false;

    } else if (isNumber(usersResponse)) {
      if (+usersResponse === botNumber) {
        alert('Успех!');
        console.log('Успех!');
        return true;

      } else if (+usersResponse < botNumber) {
        //— если пользовательское число меньше, 
        //то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
        alert('Загаданное число больше');
        console.log('Загаданное число больше');
        return getUserResponse();

      } else if (+usersResponse > botNumber) {
        //— если пользовательское число больше, 
        //то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
        alert('Загаданное число меньше');
        console.log('Загаданное число меньше');
        return getUserResponse();
      }

    } else if (!isNumber(usersResponse)) {
      //— если пользователь ввел не число, 
      //то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
      alert('Введи число!');
      console.log('Введи число!');
      return getUserResponse();
    }
  };

  return getUserResponse;
};

let initiateGame = gameBot();
initiateGame();
// console.dir(initiateGame);
