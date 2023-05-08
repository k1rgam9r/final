// Счетчик времени для пользователя
if (!sessionStorage.getItem('startTime')) {
    sessionStorage.setItem('startTime', Date.now());
}

const enterTime = sessionStorage.getItem('startTime')

const showPopup = () => {
    let currentTime = Date.now()
    let spentTime = (currentTime - enterTime) / 1000
    setTimeout(showPopup, 1000);
    if (spentTime >= 0.1) {
        // clearInterval(timer)
        document.getElementById("time-site").innerHTML = (`На сайте:`+`\n`+`${Math.floor(spentTime / 60)} минут, ${Math.floor(spentTime % 60)} сек`
        )
    }
}

setTimeout(showPopup, 1000);