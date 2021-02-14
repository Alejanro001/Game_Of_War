const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
const cardValues = [
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    ['Jack', 11],
    ['Queen', 12],
    ['King', 13],
    ['Ace', 14]
]
//made classes
class Card {
    constructor(suit, rank, score, name) {
        this.suit = suit,
            this.rank = rank,
            this.score = score,
            this.name = name
    }
}
class Deck {
    constructor(cards = [], length) {
        this.cards = cards
        this.length = length
    }
    drawCard() {
        return this.cards[Math.floor(Math.random() * this.cards.length)]
    }

}
class Player {
    constructor(name, stack = [], hasCards = true) {
        this.name = name
        this.stack = stack
        this.hasCards = hasCards
    }
}
function populateDeck(deck) {
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < cardValues.length; j++) {
            let card = new Card(suit[i],
                cardValues[j][0],
                cardValues[j][1],
                `The ${cardValues[j][0]} of ${suit[i]}`)
            deck.cards.push(card)
            //deck.length++
        }
    }
}
function deal(player) {
    for (let j = 1; j <= 26; j++) {
        let cardToStack = deck.drawCard()
        //console.log(cardToStack)
        player.stack.push(cardToStack)
        for (let i = 0; i < cardsInDeck.length; i++) {
            if (cardToStack.suit == cardsInDeck[i].suit && cardToStack.score == cardsInDeck[i].score) {
                cardsInDeck.splice(i, 1)
                //deck.length--
            }
        }
    }
}


const cardsInDeck = []
const brandonStack = []
const kendrickStack = []
const brandon = new Player('Brandon', brandonStack, true)
const kendrick = new Player('Kendrick', kendrickStack, true)
const deck = new Deck(cardsInDeck, cardsInDeck.length)
//console.log(deck)

// populateDeck(deck)
// deal(brandon)
// deal(kendrick)
// populateDeck(deck)
//console.log(deck)

/** THE PLAYERS AND CARDS BELOW ARE CODED FOR TESTING THE WAR CODE ONLY
const jasmineStack=[]
const alexaStack=[]
const jasmine = new Player('jasmine', jasmineStack, true )
const alexa = new Player('alexa', alexaStack, true)
let tieCard = new Card('Spades', 'Ace', 14, `ace of spades`)
let tieBreakCard = new Card('Hearts', 2, 2, `2 of hearts`)
for(let i = 0; i<10; i++){
    jasmineStack.push(tieCard)
    alexaStack.push(tieCard)
}
jasmineStack.push(tieBreakCard)
alexaStack.push(tieBreakCard)

//console.log(alexaStack)
//console.log(jasmineStack)
//gameOfWar(jasmine, alexa)
// console.log(brandon.stack)
// console.log(kendrick.stack)
*/

// syntax for removing a specific element from an array
// let array = [0,1,2,3,4,5,6]
// array.splice(3,1)
// console.log(array)

function gameOfWar(player_1, player_2) {
    populateDeck(deck)
    deal(player_1)
    deal(player_2)
    let gameOver = false
    alert(`Let the game begin!!!`)
    while (!gameOver) {
        let p1TopCard = player_1.stack[0]
        let p2TopCard = player_2.stack[0]
        player_1.stack.shift()
        player_2.stack.shift()
        alert(`${player_1.name} has ${p1TopCard.name}. ${player_2.name} has ${p2TopCard.name}`)
        if (p1TopCard.score > p2TopCard.score) {
            player_1.stack.push(p1TopCard, p2TopCard)
            alert(`${player_1.name} wins this round!`)
            alert(`The score is: ${player_1.name} has ${player_1.stack.length} card(s) and ${player_2.name} has ${player_2.stack.length} card(s)`)
            if (player_2.stack.length == 0) { gameOver = true }
        } else if (p2TopCard.score > p1TopCard.score) {
            player_2.stack.push(p1TopCard, p2TopCard)
            alert(`${player_2.name} wins this round!`)
            alert(`The score is: ${player_1.name} has ${player_1.stack.length} card(s) and ${player_2.name} has ${player_2.stack.length} card(s)`)
            if (player_1.stack.length == 0) { gameOver = true }
        } else {
           
            // gameOver = true
            let war = true
            let prize = []
            while (war) {
                 alert('WAR!')
                 alert(`The score is: ${player_1.name} has ${player_1.stack.length} card(s) and ${player_2.name} has ${player_2.stack.length} card(s)`)
                let p1hidden = player_1.stack[0] //gets a facedown card from player 1
                prize.push(p1hidden) //puts that card in a new array
                player_1.stack.shift()//removes that card from their stack
                let p2hidden = player_2.stack[0]//repeats for player 2
                prize.push(p2hidden)
                player_2.stack.shift()
                if (player_1.stack.length == 0 || player_2.stack.length == 0) { gameOver = true; alert(`game over`); break }
                let p1WarCard = player_1.stack[0]//gets player 1's war card
                prize.push(p1WarCard)//puts it in the prize array
                player_1.stack.shift()//removes it from their stack
                let p2WarCard = player_2.stack[0]//repeats for player 2
                prize.push(p2WarCard)
                player_2.stack.shift()
                if (player_1.stack.length == 0 || player_2.stack.length == 0) { gameOver = true; alert(`game over`); break }
                console.log(prize)
                if (p1WarCard.score > p2WarCard.score) {
                    //p1 wins war
                    for (i = 0; i < prize.length; i++) {
                        player_1.stack.push(prize[i])
                        if (player_2.stack.length == 0) { gameOver = true; alert(`game over`); break }
                    }
                    war = false
                } else if (p2WarCard.score > p1WarCard.score) {
                    //p2 wins war
                    for (i = 0; i < prize.length; i++) {
                        player_2.stack.push(prize[i])
                        if (player_1.stack.length == 0) { gameOver = true; alert(`game over`); break }
                    }
                    war = false
                } //else if tie, war remains true and the loop continues. No code needed here
                //the array of prizes will populate until the war is over. 
                if (player_1.stack.length == 0 || player_2.stack.length == 0) { gameOver = true; alert(`game over`); break }


            }
        }
    }
}
gameOfWar(brandon, kendrick)