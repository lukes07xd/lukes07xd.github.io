window.addEventListener("load", () => {
    clock();
    function clock() {
        const today = new Date();

        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;

        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();

        const monthList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        const date = monthList[month] + " " + day + ", " + year;
        const time = hour + ":" + minute + ":" + second;

        const dateTime = date + " - " + time;
        document.getElementById("live-date-time").innerHTML = dateTime;
        setTimeout(clock, 1000);
    }
});