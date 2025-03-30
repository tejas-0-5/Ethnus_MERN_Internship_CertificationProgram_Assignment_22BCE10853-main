function sortString() {
    let str = document.getElementById("textInput").value.trim();

    if (str === "") {
        document.getElementById("result").innerText = "Please enter a string!";
        return;
    }

    let sortedStr = str.toLowerCase().split('').sort().join('');
    document.getElementById("result").innerText = "Sorted String: " + sortedStr;
}
