console.log("This is the Javascript!");

var moment = require("moment");

console.log("Today's Date:");
var date = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(date);

console.log("Hours Since the Day Started:");
var dayStart = moment().startOf("day").fromNow();
console.log(dayStart);

console.log("Hours Until the End of the Day:");
var dayEnd = moment().endOf("day").fromNow();
console.log(dayEnd);
