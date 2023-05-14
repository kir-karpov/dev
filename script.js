"use strict";

const appData = {
  title: " ",
  screens: " ",
  screenPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: " ",
  service2: " ",
  start: function () {
    appData.title = prompt("Как называется ваш проект?");
    appData.screens = prompt("Какие типы экранов нужно разработать?");

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    this.logger();
  },
  logger: function () {
    console.log(`Информация о текущем объекте:`, this.title);
    console.log(`Информация о текущем объекте:`, this.screens);
    console.log(`Информация о текущем объекте:`, this.screenPrice);
    console.log(`Информация о текущем объекте:`, this.adaptive);
    console.log(`Информация о текущем объекте:`, this.allServicePrices);
    console.log(`Информация о текущем объекте:`, this.rollback);
    console.log(`Информация о текущем объекте:`, this.fullPrice);
    console.log(`Информация о текущем объекте:`, this.servicePercentPrice);
    console.log(`Информация о текущем объекте:`, this.service1);
    console.log(`Информация о текущем объекте:`, this.service2);
  },
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNumber(price));

    sum += +price;
  }
  return sum;
};

const getFullPrice = function () {
  return +appData.screenPrice + +appData.allServicePrices;
};

const getServicePercentPrice = function () {
  return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
};

const getTitle = function () {
  return (
    appData.title.trim()[0].toUpperCase() +
    appData.title.trim().substr(1).toLowerCase()
  );
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

appData.start();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrice();
appData.title = getTitle();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
