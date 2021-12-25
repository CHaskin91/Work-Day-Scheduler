// variable for saving tasks/plans
var saveBtn = $(".saveBtn");
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

// Create function to color-code timeblocks dependent on past, present, future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // Save to localStorage
    localStorage.setItem(time, plan);
});

function usePlanner() {
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    })
}

timeBlockColor();
usePlanner();