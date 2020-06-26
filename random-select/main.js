/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/
function RandomEat(){
    let numberOfListItem = $("#choices li").length;
    let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("#random-result").text($("#choices li").eq(randomChildNumber).text());
    $("#random-pic").attr("src",pictures[randomChildNumber]);
}

function RandomNum(){
    $("#random-n1").text(Math.floor(1+Math.random()*9));
    $("#random-n2").text(Math.floor(1+Math.random()*9));
    $("#random-n3").text(Math.floor(1+Math.random()*9));
    $("#random-n4").text(Math.floor(1+Math.random()*9));
}
/*
$(document).ready(function(){
    
    
    $("b1").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",pictures[randomChildNumber]);
    });
});
*/
/*
$(document).ready(function(){
    $("b1").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",pictures[randomChildNumber]);
    });
});
*/