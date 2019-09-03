let time;
setInterval(function(){
    time = moment();
    document.getElementById('clock').innerHTML = time.format('HH:mm:ss');
},1000)