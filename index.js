console.log("Hello from the JavaScript!");

var date = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(date);

var dayEnd = moment().endOf("day").fromNow();
console.log(dayEnd);
