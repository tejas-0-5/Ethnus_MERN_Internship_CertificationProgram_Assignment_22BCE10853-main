function showDate() {
    let today = new Date();
    let day = today.getDate();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = monthNames[today.getMonth()];
    let year = today.getFullYear();

    document.getElementById("date").innerText = day + "/" + month + "/" + year;
}

function showTime() {
    let now = new Date();
    document.getElementById("time").innerText = now.toString();
}
