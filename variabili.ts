
let player1: number = 15
let player2: number = 75



function getNumber(): number{
    
    
    return Math.floor(Math.random() * 100) + 1
    
    
}

const randomNumber = getNumber()
console.log(`Random number: ${randomNumber}`)

const player1Closer = Math.abs(randomNumber - player1)
const player2Closer = Math.abs(randomNumber - player2)




if (player1 === randomNumber) {
    console.log('Player1 got the correct number')
} else if (player2 === randomNumber) {
    console.log('Player2 got the correct number')
} else {
    const closerPlayer = player1Closer < player2Closer ? 'Player1 got closer' : 'Player2 got closer'

    console.log(`${closerPlayer} is the closest to ${randomNumber}`)
}