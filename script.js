const countdownDate = new Date('July 28, 2024 14:20:00').getTime();

const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = ((distance % (1000 * 60)) / 1000).toFixed(2);

    document.getElementById('countdown').innerHTML = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = '今日はイベント当日です！';
    }
}, 10);

let count = 0;
document.getElementById('tanosimibtn').addEventListener('click', function() {
    count++;
    document.getElementById('clickCount').innerText = count;
});
