const { read } = require("fs");
const weather = require("./weather.json");
const readline = require("readline").createInterface({
  input: process.stdin,
});

const inputValue = new Promise((res) => {
  let value;
  readline.question((value) => readline.close());

  return res();
});

async function getWetherOnDate() {
  let res, date;
  while (!res) {
    console.log("Enter the Date YY-MM-DD HH-MM-SS like 2019-03-28 01:00:00");
    date = await inputValue;
    console.log(date);
    res = weather.find((w) => w.dt_txt == date);
    console.log(res);
    if (!res) console.log("Date not found,Enter the date again");
  }

  while (choice) {
    console.log(`Enter the choice 1. Get weather
  2. Get Wind Speed
  3. Get Pressure
  0. Exit`);

    choice = await inputValue;
    choice = Number.parseInt(choice);

    switch (choice) {
      case 0:
        break;
      case 1:
        console.log(`Weather on date ${date} is  `, res.weather);
        break;
      case 2:
        console.log(`Cloud on date ${date} is  `, res.wind);
        break;
      case 3:
        console.log(`Cloud on date ${date} is  `, res.clouds);
        break;
    }

    console.log("Enter the choice");
  }
}
