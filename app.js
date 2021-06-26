var rrp = document.getElementById('resultp');
var rrc = document.getElementById('resultc');
var rck = document.getElementById('rock').innerHTML;
var sic = document.getElementById('sic').innerHTML;
var pap = document.getElementById('pap').innerHTML;
var scc = document.getElementById('scorec');
var scc = document.getElementById('scorep');

scc.innerHTML = 0;

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

}