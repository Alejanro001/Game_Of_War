const suit = ['hearts', 'spades', 'clubs', 'diamonds']
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
    constructor(length, cards = []) {
        this.length = length,
            this.cards = cards
    }
    drawCard() {
        return this.cards[Math.floor(Math.random() * this.length)]
    }

}
class Player {
    constructor(name, stack = [], hasCards = true) {
        this.name = name
        this.stack = stack
        this.hasCards = hasCards
    }
}
const cardsInDeck = []
//creating all of the cards and placing them in the deck
for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
        let card = new Card(suit[i],
            cardValues[j][0],
            cardValues[j][1],
            `The ${cardValues[j][0]} of ${suit[i]}`)
        cardsInDeck.push(card)
    }
}

//now we have a deck full of cards
const deck = new Deck(cardsInDeck.length, cardsInDeck)
console.log(cardsInDeck.length)
//the method from the deck class for drawing a random card is working
// let x = deck.drawCard()
// console.log(x)

brandonStack = []; kendrickStack = []
const brandon = new Player('Brandon', brandonStack, true)
const kendrick = new Player('Kendrick', kendrickStack, true)


// while (deck.cardsInDeck.length <= 26) {
//     let cardToStack = deck.drawCard()
//     console.log(cardToStack)
//     brandon.stack.push(cardToStack)
//     for (let i = 0; i < cardsInDeck.length; i++) {
//         if (cardToStack.suit == cardsInDeck[i].suit && cardToStack.score == cardsInDeck[i].score) {
//             cardsInDeck.splice(i, 1)
//         }s
//     }
// }
console.log(cardsInDeck)
// function deal(player) {
    
//     for(let j = 1; j <= 26; j++) {
//         let cardToStack = deck.drawCard()
//         console.log(cardToStack)
//         player.stack.push(cardToStack)
//         for (let i = 0; i < cardsInDeck.length; i++) {
//             if (cardToStack.suit == cardsInDeck[i].suit && cardToStack.score == cardsInDeck[i].score) {
//                 cardsInDeck.splice(i, 1)
//                 console.log(cardsInDeck.length)
//             }
//         }        
//     }
// }

for(let j = 1; j <= 26; j++) {
    let cardToStack = deck.drawCard()
    console.log(cardToStack)
    brandon.stack.push(cardToStack)
    for (let i = 0; i < cardsInDeck.length; i++) {
        if (cardToStack.suit == cardsInDeck[i].suit && cardToStack.score == cardsInDeck[i].score) {
            cardsInDeck.splice(i, 1)
            console.log(cardsInDeck.length)
            //console.log(Math.floor(Math.random)*cardsInDeck.length)
            console.log(cardsInDeck)
            console.log(deck)
            deck.length--
        }
    }        
}
for(let j = 1; j <= 26; j++) {
    let cardToStack = deck.drawCard()
    console.log(cardToStack)
    kendrick.stack.push(cardToStack)
    for (let i = 0; i < cardsInDeck.length; i++) {
        if (cardToStack.suit == cardsInDeck[i].suit && cardToStack.score == cardsInDeck[i].score) {
            cardsInDeck.splice(i, 1)
            console.log(cardsInDeck.length)
            //console.log(Math.floor(Math.random)*cardsInDeck.length)
            //console.log(cardsInDeck)
            //console.log(deck)
            deck.length--
        }
    }        
}
console.log(brandon.stack)
console.log(kendrick.stack)

//deck.cardsInDeck.splice(cardToStack, 1)
//console.log(deck.cardsInDeck)




console.log(cardsInDeck.length)
// syntax for removing a specific element from an array
// let array = [0,1,2,3,4,5,6]
// array.splice(3,1)
// console.log(array)
