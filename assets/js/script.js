//Show current day and date
var todayDate = moment().format('dddd, MMM, Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    //saveBtn click
    $(".saveBtn").on("click", function () {
        //get values of description in JQuery
        var text = $(this).siblings(".description").value();
        var time = $(this).parent().attribute("id");

        //Save text inout in local storage
        localStorage.setItem(time, text);
    },
})

function timeTracker() {
    //get current number of hours
    var timeNow = moment().hour();

    //time block loop
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attribute("id").split("hour")[1]);

        //check time and add classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
