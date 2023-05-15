"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  start: function () {
    do {
      this.title = prompt("Как называется ваш проект?");
    } while (!isValidString(this.title));

    do {
      this.screens = prompt("Какие типы экранов нужно разработать?");
    } while (!isValidString(this.screens));

    do {
      this.screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isValidNumber(this.screenPrice));

    this.adaptive = confirm("Нужен ли адаптив на сайте?");
    this.logger();
  },
  logger: function () {
    for (const key in this) {
      if (typeof this[key] !== "function") {
        console.log(`Информация об объекте: ${key} - ${this[key]}`);
      }
    }
  },
};

const isValidString = function (str) {
  return typeof str === "string" && str.trim().length > 0;
};

const isValidNumber = function (num) {
  return !isNaN(num) && typeof num === "number";
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let service = "";

    do {
      service = prompt("Какой дополнительный тип услуги нужен?");
    } while (!isValidString(service));

    let price = 0;

    do {
      price = +prompt("Сколько это будет стоить?");
    } while (!isValidNumber(price));

    sum += price;
  }

  return sum;
};

const getFullPrice = function () {
  return appData.screenPrice + appData.allServicePrices;
};

const getServicePercentPrice = function () {
  return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
};

const getTitle = function () {
  const trimmedTitle = appData.title.trim();
  return trimmedTitle[0].toUpperCase() + trimmedTitle.substr(1).toLowerCase();
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
