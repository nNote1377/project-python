
function back() {
    if (page > 1) {
        page--;
        document.getElementById("c").innerHTML = "<embed src='lesson" + page + ".html'>";
        showLesson();
    }
}

function next() {
    if (page < 5) {
        page++;
        document.getElementById("c").innerHTML = "<embed src='lesson" + page + ".html'>";
        showLesson();
    }
}

function showLesson() {

    document.getElementById("unit_p").innerHTML = "Lesson " + page;
}

function setPage(p) {
    p = parseInt(p);
    if (p <= 5) {
        window.location = "learn.html?" + p;
    }
}


let page = window.location.search.split("?")[1];
if (page <= 5) {
    document.getElementById("c").innerHTML = "<embed src='lesson" + page + ".html'>";
}
showLesson();
function goVSC() {
    window.open("https://code.visualstudio.com/", "_blank");
}

function goPYcharm() {
    window.open("https://www.jetbrains.com/pycharm/", "_blank");
}

function goPY() {
    window.open("https://www.python.org/downloads/", "_blank");
}
