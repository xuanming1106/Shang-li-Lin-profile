$(document).ready(function(){
    //一次產生固定標題列
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );

    //反覆產生資料列
    let oneDayMilliseconds = 24*60*60*1000;

    /*
    var topicCount = topic.length;
       for(var x=0; x<topicCount; x++){
           $("#courseTable").append("<tr>");
           $("#courseTable").append("<tr>"+(x+1)+"</td>");
           $("#courseTable").append("<tr>"+startDate+"</td>");
           $("#courseTable").append("<tr>"+topic[x]+"</td>");
           $("#courseTable").append("<tr>");
       }*/
    //反覆產生資料列

    let topicCount = topicsArray.length;
    
    //topicsArray[1].fontcolor = ("green");
    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+ 7*x*oneDayMilliseconds);
        let randomNum = Math.floor(Math.random()*5);
        if(topicsArray[randomNum] == "維修中") {
            $("#courseTable").append(
                "<tr>"+
                "<td>"+ (x+1) + "</td>"+
                "<td>" + thisDate.toLocaleDateString().slice(5) + "</td>"+
                "<td>"+ topicsArray[randomNum].fontcolor("pink") + "</td>"+
                "</tr>"
                //每一列有場次、預計日期、主題
            );
        }
        else{
        $("#courseTable").append(
            "<tr>"+
            "<td>"+ (x+1) + "</td>"+
            "<td>" + thisDate.toLocaleDateString().slice(5) + "</td>"+
            "<td>"+ topicsArray[randomNum] + "</td>"+
            "</tr>"
            //每一列有場次、預計日期、主題
        );
        }
    }
});

function SetDate(){
    let startMonth=0,startDay=0;
    var dateControl = document.getElementById("inputDate");
    startMonth = dateControl.value.substring(5,7);
    startDay = dateControl.value.substring(8,10);
    setMonthAndDay(startMonth,startDay);
    
    let topicCount = topicsArray.length;
    let oneDayMilliseconds = 24*60*60*1000;

    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );
    
    
    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+ 7*x*oneDayMilliseconds);
        let randomNum = Math.floor(Math.random()*5);
        if(topicsArray[randomNum] == "維修中"){
            $("#courseTable").append(
                "<tr>"+
                "<td>"+ (x+1) + "</td>"+
                "<td>" + thisDate.toLocaleDateString().slice(5) + "</td>"+
                "<td>"+ topicsArray[randomNum].fontcolor("pink") + "</td>"+
                "</tr>"
                //每一列有場次、預計日期、主題
            );
        }
        else{
        $("#courseTable").append(
            "<tr>"+
            "<td>"+ (x+1) + "</td>"+
            "<td>" + thisDate.toLocaleDateString().slice(5) + "</td>"+
            "<td>"+ topicsArray[randomNum] + "</td>"+
            "</tr>"
            //每一列有場次、預計日期、主題
        );
        }
    }
    console.log(thisDate);
}

document.addEventListener('change',SetDate);