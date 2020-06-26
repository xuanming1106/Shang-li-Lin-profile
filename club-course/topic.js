let topicsArray = [
    "經驗加倍X2",
    "金錢加倍X2",
    "怪物掉落加倍X2",
    "轉蛋機率加倍X2",
    "維修中",
    "123"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
