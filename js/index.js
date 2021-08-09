var title = new Vue({
    el: '#title',
    data: {
        title: '2022高考倒计时'
    }
})

var clock = new Vue({
    el: '#clock',
    data: {
        day: '000',
        hour: '00',
        minute: '00',
        second: '00',
        message: '距离2022年高考还有',
        pass: '0.00%'
    }
})

function change(a){
    if (a == 1) {
        css.href="css/night.css";
    }
    if (a == 2) {
        css.href="css/light.css";
    }
}


function getQueryVariable(variable){
	let query = window.location.search.substring(1);
	let vars = query.split("&");
	for (let i=0;i<vars.length;i++) {
			let pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
	}
	return(false);
}
if(getQueryVariable("name")) {
    title.title = decodeURI(getQueryVariable("name")) + "倒计时";
    clock.message = "距离" + decodeURI(getQueryVariable("name")) + "还有";
}
let EndTime = new Date("2022/06/07 08:00");
if(getQueryVariable("date")==false||getQueryVariable("time")==false||getQueryVariable("name")==false) EndTime= new Date("2022/06/07 08:00"),name="2022高考";
else EndTime= new Date(getQueryVariable("date")+" "+getQueryVariable("time")),name=decodeURI(getQueryVariable("name"));

const getTime = () => {
    let NowTime = new Date();
    let t = EndTime.getTime() - NowTime.getTime();
    if (t < 0) EndTime = new Date("2022/06/07 08:00"), name = "2022高考", t = EndTime.getTime() - NowTime.getTime();


    const days = Math.floor(t / 1000 / 60 / 60 / 24);
    clock.day = days < 100 ? (days < 10 ? "00" + days : "0" + days) : days;

    const hours = Math.floor(t / 1000 / 60 / 60 % 24);
    clock.hour = hours < 10 ? "0" + hours : hours;

    const minutes = Math.floor(t / 1000 / 60 % 60);
    clock.minute = minutes < 10 ? "0" + minutes : minutes;

    const seconds = Math.floor(t / 1000 % 60);
    clock.second = seconds < 10 ? "0" + seconds : seconds;

    var pass = Math.floor(((NowTime.getTime() / 1000) + 28800) % 86400) / 864;
    pass=pass.toFixed(2);
    document.getElementById("progress").value=pass;
    clock.pass=pass+" % ";
}
getTime();

let timer = setInterval(() => {
    getTime();
}, 1000);