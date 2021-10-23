function autoTimeUpdate(){

    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    
    var am_or_pm = document.getElementById('am-or-pm');
    
    if(hours >= 12){
    am_or_pm.innerHTML = 'PM';
    }else{
    am_or_pm.innerHTML = 'AM';
    }
    
    //when hours is in 12 to 24
    if(hours > 12){
        hours = hours-12;
    }
    
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds; 

}    

//1000 for 1 second
setInterval(autoTimeUpdate,1000)
