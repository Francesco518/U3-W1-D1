var player1 = 15;
var player2 = 75;
function getNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
var randomNumber = getNumber();
console.log("Random number: ".concat(randomNumber));
var player1Closer = Math.abs(randomNumber - player1);
var player2Closer = Math.abs(randomNumber - player2);
if (player1 === randomNumber) {
    console.log('Player1 got the correct number');
}
else if (player2 === randomNumber) {
    console.log('Player2 got the correct number');
}
else {
    var closerPlayer = player1Closer < player2Closer ? 'Player1 got closer' : 'Player2 got closer';
    console.log("".concat(closerPlayer, " is the closest to ").concat(randomNumber));
}
