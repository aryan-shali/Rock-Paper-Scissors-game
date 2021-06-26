var rrp = document.getElementById('resultp');
var rrc = document.getElementById('resultc');
var rck = document.getElementById('rock').innerHTML;
var sic = document.getElementById('sic').innerHTML;
var pap = document.getElementById('pap').innerHTML;
var scc = document.getElementById('scorec');
var scp = document.getElementById('scorep');
var txt = document.getElementById('textstatus');
scc.innerHTML = 0;
scp.innerHTML = 0;


function rock(aa) {
    var pp = aa.innerHTML;
    rrp.innerHTML = pp;
    if (pp == rck) {
        var result = 1;
    } else if (pp == sic) {
        result = 2;
    } else {
        result = 3;
    }
    var com = Math.floor(Math.random() * 3) + 1;
    if (com == 1) {
        rrc.innerHTML = "rock";
    } else if (com == 2) {
        rrc.innerHTML = "scissors";
    } else {
        rrc.innerHTML = "paper";
    }

    if (com == result) {
        txt.style.opacity = "100"
        txt.innerHTML = "equal";
        txt.style.color = "blue";
    } else if (result == 1 && com == 2) {
        txt.style.opacity = "100"
        txt.innerHTML = "winner!";
        txt.style.color = "green";
        scp.innerHTML++

    } else if (result == 2 && com == 1) {
        txt.style.opacity = "100"
        txt.innerHTML = "loser";
        txt.style.color = "red";
        scc.innerHTML++

    } else if (result == 1 && com == 3) {
        txt.style.opacity = "100"
        txt.innerHTML = "loser";
        txt.style.color = "red";
        scc.innerHTML++

    } else if (result == 3 && com == 1) {
        txt.style.opacity = "100"
        txt.innerHTML = "winner!";
        txt.style.color = "green";
        scp.innerHTML++
    } else if (result == 3 && com == 2) {
        txt.style.opacity = "100"
        txt.innerHTML = "loser";
        txt.style.color = "red";
        scc.innerHTML++
    } else if (result == 2 && com == 3) {
        txt.style.opacity = "100"
        txt.innerHTML = "winner!";
        txt.style.color = "green";
        scp.innerHTML++

    }


}