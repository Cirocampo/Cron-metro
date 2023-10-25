var button_start = document.getElementById("start");
var button_stop = document.getElementById("stop");  
var button_res = document.getElementById("res");
var value_sec = document.getElementById("sec");
var value_mim = document.getElementById("mim");
var sec = 0;
var mim = 0; 
var interval;

button_start.onclick = function() {
 interval = setInterval(startTimer, 1000);
}

button_stop.onclick = function() {
    clearInterval(interval);    
}

button_res.onclick = function() {
    value_sec.innerHTML = '00:00'
}

function startTimer(){
    if(sec <= 9){
        let vare = sec++;
        value_sec.innerHTML = '0' + mim +':0' + vare;
        if(mim > 9){
            value_sec.innerHTML = mim + ':' + vare;
        }
    } 

    if(sec > 9){
        let vare = sec++;
        value_sec.innerHTML = '0' + mim + ':' + vare;
        if(sec >= 60){
            sec = 0;
            mim++;
            value_sec.innerHTML = '0' + mim + ':' + vare;              
        }
        if(mim > 9){
            value_sec.innerHTML = mim + ':' + vare;
        }
    }
}

