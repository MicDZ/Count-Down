function getQueryVariable(variable){
	let query = window.location.search.substring(1);
	let vars = query.split("&");
	for (let i=0;i<vars.length;i++) {
			let pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
	}
	return(false);
}

var type="Desktop",mode="light";



window.addEventListener("load", () => {
    const day = document.querySelector(".day");
	const hour = document.querySelector(".hour");
	const minute = document.querySelector(".minute");
	const second = document.querySelector(".second");
	

	if(decodeURI(getQueryVariable("mode"))) mode=getQueryVariable("mode");
	else mode="light";

	const getTime = () => {
		
		if(document.body.clientWidth>=700) type="Desktop";
		else type="Mobile";
		
		UpdateCss();


		var EndTime=new Date("2022/06/07 08:00");
		var name="2022高考";


	
		if(getQueryVariable("date")==false||getQueryVariable("time")==false||getQueryVariable("name")==false) EndTime= new Date("2022/06/07 08:00"),name="2022高考";
		else EndTime= new Date(getQueryVariable("date")+" "+getQueryVariable("time")),name=decodeURI(getQueryVariable("name")); 

		document.getElementById("name").innerHTML="距离"+decodeURI(name)+"还有";
		document.getElementById("title").innerHTML=name+"倒计时";
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
		
		if(t<0) EndTime= new Date("2022/06/07 08:00"),name="2022高考",t =EndTime.getTime() - NowTime.getTime();

        const days = Math.floor(t/1000/60/60/24);


		day.innerHTML = days < 100 ? (days<10? "00"+days: "0"+days) : days;        

		const hours = Math.floor(t/1000/60/60%24);

		hour.innerHTML = hours < 10 ? "0" + hours : hours;

		const minutes = Math.floor(t/1000/60%60);
		minute.innerHTML = minutes < 10 ? "0" + minutes : minutes;

		const seconds = Math.floor(t/1000%60);
		second.innerHTML = seconds < 10 ? "0" + seconds : seconds;

		var pass = Math.floor(((NowTime.getTime() / 1000) + 28800) % 86400) / 864;
    	pass = pass.toFixed(2); 
		document.getElementById("progress").value=pass;
		document.querySelector(".data>span").innerHTML=pass+" % ";
	};
	getTime();

	let timer = setInterval(() => {
		getTime();
	}, 100);


});

function change(a){
	if (a == 1) {
        mode="night";
		
    }
    if (a == 2) {
        mode="light";
    }
}

function UpdateCss() {
	css.setAttribute("href","css/"+type+"/"+mode+".css");
}

function jump(){
	window.location.href="https://github.com/MicDZ/Count-down";
   }