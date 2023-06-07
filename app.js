const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (response, reject) => {
  const dateTime = new Date();
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  response.send(`
    ${result.getDate()}/${result.getMonth() + 1}/${get.getFullYear()}`);
});
module.exports = app;
