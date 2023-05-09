`use strict`

const service1 = prompt ("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt ("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить ?");


const title = prompt("Как называется ваш проект?");
console.log(typeof title);
const screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens.length);
const screenPrice = prompt ("Сколько будет стоить данная работа?");
console.log("Стоимость верстки экранов ${screenPrice}` рублей");
const rollback = 10;
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice * (rollback/100));
console.log(typeof fullPrice);
console.log("Стоимость разработки сайта ${fullPrice} рублей");
const adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(typeof adaptive);

const screensArray = screens.toLowerCase().split(", ");
console.log(screensArray);

// задание 9)

const Mediator = 0.3; // откат посреднику в 30%
const servicePercentPrice = Math.ceil(fullPrice * (3 - Mediator));
console.log("Стоимость работы с учетом коммисии посреднику" + servicePercentPrice + " руб.");

// конструкция задания 10)

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000 ) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0 ) {
  console.log("Скидка не предусмотрена");
} else if ( fullPrice < 0 ) {
  console.log("Что-то пошло не так");
} 