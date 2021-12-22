// Jumbotron variable for date.  including month/day/year/hour/minutes/seconds
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// jQuery calling <p> ID for currentDay (Jumbotron HTML)
$("#currentDay").text(date);