$(".btn").on("click",function(){
    var timeblock = $(this).attr("id").split("-")[0]
    var userentry = $("#"+timeblock+"-txt").val()
    console.log(timeblock,userentry)
})