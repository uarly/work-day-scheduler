$(".btn").on("click",function(){
    var timeblock = $(this).attr("id").split("-")[0]
    var userentry = $("#"+timeblock+"-txt").val()
    console.log(timeblock,userentry)
    localStorage.setItem(timeblock,userentry)
})
var today = moment()
var hour = moment().hours()
console.log("Current Day",today,hour)


$("#currentDay").text(today)
for(let i=9;i<18;i++){
    $("#"+i+"-txt").val(localStorage.getItem(i))
    if ( i > hour){
        $("#"+i+"-txt").addClass("bg-success")
    }else if(i == hour){
        $("#"+i+"-txt").addClass("bg-info")
    }
    else {
        $("#"+i+"-txt").addClass("bg-secondary")
    }
}