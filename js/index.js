function getQueryVariable(variable){
	let query = window.location.search.substring(1);
	let vars = query.split("&");
	for (let i=0;i<vars.length;i++) {
			let pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
	}
	return(false);
}

window.addEventListener("load", () => {
    const day = document.querySelector(".day>span");
	const hour = document.querySelector(".hour>span");
	const minute = document.querySelector(".minute>span");
	const second = document.querySelector(".second>span");
	
	
	const getTime = () => {
		var EndTime=new Date("2022/06/07 08:00");
		var name="2022高考";


	
		if(getQueryVariable("date")==false||getQueryVariable("time")==false||getQueryVariable("name")==false) EndTime= new Date("2022/06/07 08:00"),name="2022高考";
		else EndTime= new Date(getQueryVariable("date")+" "+getQueryVariable("time")),name=decodeURI(getQueryVariable("name")); 

		document.getElementById("name").innerHTML="距离"+decodeURI(name)+"还有";
		document.getElementById("title").innerHTML=name+"倒计时";
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
       
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
	}, 1000);


});
