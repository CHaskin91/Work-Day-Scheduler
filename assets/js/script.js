// Jumbotron variable for date.  including month/day/year/hour/minutes/seconds
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// jQuery calling <p> ID for currentDay (Jumbotron HTML)
$("#currentDay").text(date);

// Create a function to show/display the date as text
function update() {
    var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(date);
};

// Call the Update Function
update();
// setInterval to update every second for timer to run continuously
setInterval(update, 1000);