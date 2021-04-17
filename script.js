var day = moment().format('LL');
var time = moment().format('LT');
var currentHour = time.split(':')[0]
var allHours = ['9','10', '11', '12', '1', '2', '3', '4', '5'] 


console.log('time', currentTime, typeof(currentTime))
console.log(currentHour)


function time(currentTime){

} 

//updates the current date and time
$('#currentDay').text(day)
$('#currentTime').text(time)


$('.nineBtn').on('click',function (e){
    var userInput = $('#nineText').val();
    e.preventDefault();
    localStorage.setItems('nine', userInput);
})


function presentTime(){
   // console.log(currentHour)
    //console.log($(`#${currentHour}`).children()[1])
   // var hour = $(`#${currentHour}`).children()[1]
    //hour.css()


    //$(`#${currentHour}`).children()[1].attr('style', 'background-color:#ff6961')
    //document.getElementById(currentHour).style.backgroundColor = '#ff6961'

    //document.getElementById(currentHour).classList.add("present")
    $(`#${currentHour}`).addClass('present')
    //hour.css()
    //console.log($(`#${currentHour}`))
 





}





presentTime()

  


