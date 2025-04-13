// your code here
document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;

    if (name && year) {
        var url = "https://localhost:8080/?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
        document.getElementById('url').textContent = url;
    } else {
        alert("Please fill in both fields.");
    }
});