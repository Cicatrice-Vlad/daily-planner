var plannerContainer = $("#planner");
// created the variable that is targetting the planner id from HTML
var currDate = moment();
// using moment.js accordingly to target the current date.
$("#currentDay").text(currDate.format("ddd, MMM Do"));
// installing the format for the time set and the current day.
var currHour = currDate.hours();
console.log(currHour);
// created current hour method to be found in real life time. Also, logged it in to the console.
currHour = 12;
// establishing the current hour randomly to appeal more to the exercise example.
function generateDayPlanner(starthour, endhour) {
  // created a method within a function to establish it later when we call and append all elements as the start hour and end hour of the planner.
  // using the for loop below to create all the possible times and variables that would be followed to be appended.
  for (i = starthour; i < endhour; i++) {
    var classStyle = "";
    if (i < currHour) {
      classStyle = "past";
    } else if (i === currHour) {
      classStyle = "present";
    } else if (i > currHour) {
      classStyle = "future";
    }
    // finished adding the possible times for each section in the for loop
    var timeblock = $("<div>");
    timeblock.attr("class", "row time-block");
    // created time the time block using jQuery and targeting the right row for each specific time.
  }
}
