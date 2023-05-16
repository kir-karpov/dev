"use strict";

const appData = {
  title: " ",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  allServicePrices: 0,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isTextOnly: function (text) {
    return /^[A-Za-zА-Яа-я\s]+$/.test(text);
  },

  isTextWithNumbers: function (text) {
    return /^[A-Za-zА-Яа-я\s\d]+$/.test(text);
  },

  asking: function () {
    let projectTitle = "";
    do {
      projectTitle = prompt("Как назвается ваш проект?");
    } while (!appData.isTextOnly(projectTitle));
    appData.title = projectTitle;

    for (let i = 0; i < 2; i++) {
      let screenName = "";
      do {
        screenName = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
      } while (!appData.isTextOnly(screenName));

      let screenPrice = 0;
      do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(screenPrice));

      appData.screens.push({ id: i, name: screenName, price: screenPrice });
    }

    for (let i = 0; i < 2; i++) {
      let serviceName = "";
      do {
        serviceName = prompt("Какой дополнительный тип услуги нужен?");
      } while (!appData.isTextWithNumbers(serviceName));

      let servicePrice = 0;
      do {
        servicePrice = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(servicePrice));

      appData.services[serviceName] = +servicePrice;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000)
      {
    return "Скидка не предусмотрена";
    } else {
    return "Что-то пошло не так";
    }
    },

logger: function () {
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
console.log(appData.screens);
},
};

appData.start();