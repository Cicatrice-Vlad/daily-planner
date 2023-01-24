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
    // created time column below
    var timeColumn = $("<div>");
    timeColumn.attr("class", "col-lg-1 col-md-1 hour");
    timeColumn.text(i);
    // created the text area
    var task = $("<textarea>");
    task.attr("class", "col-lg-10 col-md-10 " + classStyle);
    task.attr("cols", "100");
    // adding a save button
    var saveBtn = $("<button>");
    saveBtn.attr("class", "col-lg-1 col-md-1 saveBtn fa fa-save");
    // added the button to the code
    timeblock.append(timeColumn);
    timeblock.append(task);
    timeblock.append(saveBtn);
    plannerContainer.append(timeblock);
    // appended all elements for the jQuery to work
  }
}
// calling the method below to update each row accordingly with the specific hour starting at 09 AM and ending at 17 PM, before 18 PM as mentioned due to the last indices not being counted had to add the next number in line so that the previous can be counted. Concatenation has been used in this code as well.
generateDayPlanner(9, 18);
// outside of it grab the buttons and then give them all listeners.
// DOM trafversal, this, or function target: hint!
// use after, localstorage save item, use the git local storage in t
