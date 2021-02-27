window.addEventListener("load", () => {
    const day = document.querySelector(".day>span");
	const hour = document.querySelector(".hour>span");
	const minute = document.querySelector(".minute>span");
	const second = document.querySelector(".second>span");

	const getTime = () => {

        var EndTime= new Date('2022/06/07 08:00:00'); 
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
