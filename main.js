var user = document.getElementById('fname');
var english = document.getElementById('english');
var setswana = document.getElementById('setswana');
var zulu = document.getElementById('zulu');
var nameGreeted = {};
function main() {
    if (user.value != "") {
        if (nameGreeted[user.value] == undefined) {
            nameGreeted[user.value] = 1;
            greet();
        }
        if (nameGreeted[user.value] != undefined) {
            nameGreeted[user.value] += 1;
            greet();
        }
    }
    if (user.value == "") {
        document.querySelector('.message').innerHTML = 'Please enter your name';
    }
    user.value = '';
}
function greet() {
    if (english.checked) {
        var greetMsg = "Hello, " + user.value + ".";
    }
    if (setswana.checked) {
        var greetMsg = "Dumela, " + user.value + ".";
    }
    if (zulu.checked) {
        var greetMsg = "Sawubona, " + user.value + ".";
    }
    if (greetMsg == undefined) {
        document.querySelector('.message').innerHTML = 'Please select language of choice.';
    }
    if (greetMsg != undefined) {
        document.querySelector('.message').innerHTML = greetMsg;
    }
}
