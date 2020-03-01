// STEP 1:

// First, create a Monster class
// Add properties for Health, Strength and Gold
// Add a constructor to initialize our values



class monster {
    constructor(health, strength, name, gold) {
    this.health = health
    this.strength = strength
    this.name = name
    this.gold = gold 
}
// Add a method to print out the Monster's health, strength, name and gold
printOut () {
    console.log (this.health)
    console.log (this.strength)
    console.log (this.name)
    console.log (this.gold)
}

}

// Create a Monster and print out that Monster's stats
let christina1 = new monster (99, 100, "Christina Monster", 50)
christina1.printOut()

// STEP 2:

// Next, create a Boss class that inherits from the Monster class
// Add a property to the Boss class called ExperiencePoints
// Add a method to the Boss class called Heal that heals the Boss to full health
// Create a Boss and print out that Boss's stats
// Set the health of the Boss to 0.
// Next call the Heal method on our Boss and then print out the stats again

class Boss extends monster {
    constructor(health, strength, name, gold, ExperiencePoints) {
    super (health, strength, name, gold)
    this.ExperiencePoints = ExperiencePoints
    this.maxHealth = this.health 
    }
    heal() {
        this.health = this.maxHealth    
}

printOut() {
    super.printOut()
    console.log(ExperiencePoints)
}
    }
// STEP 3:

// Create a Player class that has properties of Name, Health, Strength and Gold
// Create a method on the player class that prints out the player's stats
// Create a player
// Call the Print method on the instantiated player class

class player {
    constructor(name, health, strength, gold) {
    this.name = name 
    this.health = health
    this.strength = strength
    this.gold = gold 
}

printOut () {
    console.log (this.name)
    console.log (this.health)
    console.log (this.strength)
    console.log (this.gold)
}

}

let christina = new monster (100, 100, "Chrissy the monster", 100)
let sal = new monster (100, 100, "Sal the monster", 70)
let zach = new monster (100, 30, "zach the monster", 10)
let alex = new monster (100, 20, "alex the monster", 30)

let monsters = [christina, sal, zach, alex]

let trish = new player ("Trish the player", 85, 98, 60)
let peter = new player ("Peter the player", 43, 45, 100)
let jarrett = new player ("Jarrett the player", 85, 45, 32)
let kim = new player ("Kim the player", 85, 100, 47)

let players = [trish, peter, jarrett, kim]

// STEP 4:

// Create a Game class
// Create a Player property of that Game class
// Create a collection of Monsters in the Game class
// Create a constructor in the Game class to initialize our initial values
// Create a method in the Game class that prints our the game status, which will include all monster status
// and the player status

class game {
    constructor(players, monsters) {
    this.player = players;
    this.monster = monsters;
}
gameStatus (){
    this.monsters.foreach((m) =>{
        m.printOut();
    })
    gameStatus()
        this.players.foreach((p) =>{
            p.printOut();
            })
        }
}

let Game = new game (players, monsters)
game.gameStatus()
