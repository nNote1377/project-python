function value(){
    document.getElementById("t1").innerHTML = "Lesson " + parseInt(1 + u)+"<br>" + content[1 + u];
    document.getElementById("t2").innerHTML = "Lesson " + parseInt(2 + u)+"<br>" + content[2 + u];
    document.getElementById("t3").innerHTML = "Lesson " + parseInt(3 + u)+"<br>" + content[3 + u];
    document.getElementById("t4").innerHTML = "Lesson " + parseInt(4 + u)+"<br>" + content[4 + u];
}
let u = 0;
let content = ["nic tu nie ma","Installing Python","The fundamentals of python"," Data types, input/output information, operators","Basic Variables","Basic exam","Not yet","Not yet","Not yet"]
value();

function goNext() {
    if(u<4)
    u += 4;
    value();
}
function goBack() {
    if (u > 0) {
        u -= 4;
        value();
    }
}

function set(x){
    let z = parseInt(x+u);
    setPage(z);
}

function goSand(){
    window.location("sandbox.html");
}