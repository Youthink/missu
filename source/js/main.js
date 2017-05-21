window.onload = function() {
    updateNumbers();
};
function updateNumbers() {
    var beginTime = Date.parse('2017/03/27 10:37:21');
    var duration = parseInt(Date.now()- beginTime)/1000;

    var seconds = parseInt( duration % 60);
    if (seconds < 10)
        seconds = '0' + seconds;
    duration = parseInt(duration / 60);
    var minutes = duration % 60;
    if (minutes < 10)
        minutes = '0' + minutes;
    duration = parseInt(duration / 60);
    var hours = duration % 24;
    if (hours < 10)
        hours = '0' + hours;
    duration = parseInt(duration / 24);
    var days = duration;
    document.querySelector('.days-number').textContent = days;
    document.querySelector('.seconds').textContent = hours + ' 小时 ' + minutes + ' 分钟 ' + seconds + ' 秒';
    setTimeout('updateNumbers()', 1000);
}
