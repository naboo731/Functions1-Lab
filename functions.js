
let jonSnowHealth = 100
jonSnowHealth = String(jonSnowHealth)
jonSnowHealth = Number(jonSnowHealth)
// jonSnowHealth = parseInt(jonSnowHealth) // can also be done this way
// jonSnowHealth = +(jonSnowHealth)  // can also be done this way 

// console.log(jonSnowHealth)

let theWinnerIs = "Jamie is the winner"

let newWinner = theWinnerIs.replace("Jamie", "Jon")
// console.log(newWinner)

// if (newWinner.includes("Jon")){
//     console.log("Replaced Successfully")
// }

let typedNewWinner = newWinner.toLowerCase()
// console.log(typedNewWinner)
let kebobNewWinner = typedNewWinner.replaceAll(" ", "-")
// console.log(kebobNewWinner)

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log("Jon is alive")
    } else console.log("Jon has perished")
}
isJonAlive()

// jonSnowHealth = 0
// isJonAlive()

function supriseAttack(attackValue){
    jonSnowHealth -= attackValue
    isJonAlive()
}

supriseAttack(20)
supriseAttack(12)
supriseAttack(13)
// console.log(jonSnowHealth)

function greeting(person1, person2){
    console.log(`${person1} says 'Hello' to ${person2}`)
}

greeting("Evan", "Nicki")