let cday;
let chour;
let cmin;
let csec;
let cmonth;
let daysleft;
let cyear;
let daysinfeb;
let daysperyear;




let interval = window.setInterval(function(){
    let cdate = new Date();
   // console.log(cdate);
    chour = cdate.getHours();
   // console.log(chour);
    cmin = cdate.getMinutes();
    csec = cdate.getSeconds();
    cday = cdate.getDate();
    cmonth = cdate.getMonth()+1;
    cyear= cdate.getFullYear();
    if(cyear%4==0)
         {
            daysinfeb= 29;
            daysperyear= 366;
         }
    else{
        daysinfeb= 28;
            daysperyear= 365;
    }

    switch(cmonth)

     {
        case 1:  daysleft = daysperyear;
                    break;

     case 2:  daysleft = daysperyear-31;
                    break;
      
                    case 3:  daysleft = daysperyear-31-daysinfeb;
                    break;
                    case 4:  daysleft = daysperyear-31-daysinfeb-31;
                    break;
                    case 5:  daysleft = daysperyear-31-daysinfeb-31-30;
                    break;
                    case 6:  daysleft = daysperyear-31-daysinfeb-31-30-31;
                    break;
                    case 7:  daysleft = daysperyear-31-daysinfeb-31-30-31-30;
                    break;
                    case 8:  daysleft = daysperyear-31-daysinfeb-31-31-31-31-31;
                    break;
                    case 9:  daysleft = daysperyear-daysinfeb-215;
                    break;
                    case 10:  daysleft = daysperyear-daysinfeb-245;
                    break;
                    case 11:  daysleft = daysperyear-276-daysinfeb;
                    break;
                    case 12:  daysleft = daysperyear-306-daysinfeb;
                    break;
     }
    document.getElementById("sec").innerHTML = 60-csec;
    document.getElementById("min").innerHTML = 60-cmin;
    document.getElementById("hours").innerHTML = 24-chour;
    document.getElementById("days").innerHTML= daysleft-cday;
},1000);
