console.log("This is the Javascript!");

var moment = require("moment");

var date = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(date);

var dayStart = moment().startOf("day").fromNow();
console.log(dayStart);

var dayEnd = moment().endOf("day").fromNow();
console.log(dayEnd);
