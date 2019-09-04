let flag = 0;

let startTime, nowTime, stopTime, interval;

const start = () => {
    if(flag == 0){
        startTime = new moment().valueOf();
        flag = 1;
        document.getElementById('start').innerHTML = 'STOP';
        console.log(startTime);
        count();
    }
    else{
        clearInterval(interval);
        stopTime = new moment().valueOf();
        document.getElementById('display').innerHTML = moment(stopTime - startTime).format('mm:ss.SS');
        flag = 0;
        document.getElementById('start').innerHTML = 'RESTART';
    }
}

const count = () => {
    interval = setInterval(() => {
        nowTime = new moment().valueOf();
        document.getElementById('display').innerHTML = moment(nowTime - startTime).format('mm:ss.SS');
    },1);
}

const reset = () => {
    if(flag == 1){
        clearInterval(interval);
        flag = 0;
        startTime = 0;
        nowTime = 0;
    }
    document.getElementById('display').innerHTML = '00:00.00';
    document.getElementById('start').innerHTML = 'START'
}

