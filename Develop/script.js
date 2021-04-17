
var currentDay = document.getElementById("currentDay")
var currentTime = document.getElementById("currentTime")
var theDay = moment().format('dddd');  
var rightNow = moment().format('LL');
var theTime = moment().format('LT');

var currentHour = theTime.split(":")[0]

var allHours = ["9","10","11","12","1","2","3","4","5"]

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
//save button for local storage
$(".saveBtn").on("click", function(event){
   
    event.preventDefault()
    
    for (var i = 0; i < allTextRows.length; i++){
        localStorage.setItem(allTextRows[i].attr("id"),allTextRows[i].val())
    }
})
//adding local storage to html file
for (var i = 0; i < allTextRows.length; i++){
    allTextRows[i].val(localStorage.getItem(allTextRows[i].attr("id")))
}
//color function for current hour
function colors (){
    var presentHourRendered = false;
    for (var i = 0; i < allHours.length; i++){
        if (currentHour !== allHours[i] && presentHourRendered === true){
            document.getElementById(allHours[i]).firstElementChild.nextElementSibling.className += " future"
        }
        else if (currentHour === allHours[i]){
            presentHourRendered = true;
            document.getElementById(allHours[i]).firstElementChild.nextElementSibling.className += " present"
        }
        else {
            document.getElementById(allHours[i]).firstElementChild.nextElementSibling.className += " past"
        }
    }
}
colors ()











  


