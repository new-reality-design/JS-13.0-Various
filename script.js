'use strict';


//1 Восстановить порядок книг.

const allBooks = document.querySelectorAll('.book');

allBooks[0].before(allBooks[1]);
allBooks[5].after(allBooks[2]);
allBooks[0].after(allBooks[4]);


//2 Заменить картинку заднего фона на другую из папки image

const bodyContent = document.querySelector('body');
bodyContent.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


//3 Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

const bookThreeHeading = allBooks[4].querySelector('h2');
const newHeadingbookThree = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>';
bookThreeHeading.innerHTML = newHeadingbookThree;


//4 Удалить рекламу со страницы
const advert = document.querySelector('.adv');
advert.remove();


//5 Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools).

const chaptersBookTwo = allBooks[0].querySelectorAll('li');

chaptersBookTwo[7].after(chaptersBookTwo[2]);
chaptersBookTwo[3].after(chaptersBookTwo[6]);
chaptersBookTwo[6].after(chaptersBookTwo[8]);
chaptersBookTwo[7].after(chaptersBookTwo[9]);

const chaptersBookFive = allBooks[5].querySelectorAll('li');

chaptersBookFive[6].before(chaptersBookFive[2]);
chaptersBookFive[3].before(chaptersBookFive[9]);
chaptersBookFive[7].after(chaptersBookFive[5]);


//6 в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место.

const chaptersLists = document.querySelectorAll('ul');

const missingChapter = document.createElement('li');
missingChapter.textContent = 'Глава 8: За пределами ES6';
chaptersLists[5].append(missingChapter);

const chaptersBookSix = allBooks[2].querySelectorAll('li');
chaptersBookSix[9].before(chaptersBookSix[10]);