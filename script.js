var currentDay = document.getElementById("currentDay")
var currentTime = document.getElementById("currentTime")
var theDay = moment().format('dddd');  
var rightNow = moment().format('LL');
var theTime = moment().format('LT');
//splitting the time to the hour
var currentHour = theTime.split(":")[0]
//array for tables
var allHours = ["9","10","11","12","1","2","3","4","5"]
//Added the current date and time to Work Day Scheduler header 
currentDay.textContent = rightNow
currentTime.textContent = theTime

var nine = $("#9AM")
var ten = $("#10AM")
var eleven = $("#11AM")
var twelve = $("#12PM")
var one = $("#1PM")
var two = $("#2PM")
var three = $("#3PM")
var four = $("#4PM")
var five = $("#5PM")

var allTextRows = [nine, ten, eleven, twelve, one, two, three, four, five]

$(".saveBtn").on("click", function(event){
    event.preventDefault();
    for(var i = 0; i < allTextRows.length; i++){
        localStorage.setItem(allTextRows[i].attr("id"), allTextRows[i].val())
    }
})

for (var i = 0; i < allTextRows.length; i++){
    allTextRows[i].val(localStorage.getItem(allTextRows[i].attr("id")))
}
















  


