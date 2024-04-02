/**
 * Lisa Donohoo
 * Prime Digital Academy
 * Tier 2: Fungus-Fighter
 * 
 * 
 * when attack button:
 *  - update hp 
 *  - update ap
 * 
 *  - get values of hp/ap for attack
 *  - reset negative values to 0
 * 
 * render state changes to DOM
 *  - update hp/ap text above attack buttons
 *  - if fungus = 0 hp:
 *      walk ---> dead class on freaky-fungus element
 *  - if your ap = 0: 
 *      -walk ---> jump class on freaky-fungus element
 *      - all attack buttons get disabled attribute
 * 
 *  - update progress element value for input fields
 * 
 *  - if freaky-fungus hp < 50, regen 1 hp every second
 *          with setInterval()
 */



// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusGameData = {
    fungusHP : 100,
    attackPoints : 100,
    regenPower: false,
    updateGameData: function(cost, damage) {
        // update HP and AP
        this.fungusHP -= damage;
        this.attackPoints -= cost;
        // minimum HP & AP values should be 0
        if (this.fungusHP < 0) {
            this.fungusHP = 0;
        }
        if (this.attackPoints < 0) {
            this.attackPoints = 0;
        }
    }
}


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    document.querySelector(".attacks").addEventListener("click", attackFungus);
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
onReady()

function attackFungus(event) {
    let elementClicked = event.target;
    if (elementClicked.classList.contains("arcane-scepter")) {
        cost = 12;
        damage = 14;
    } else if (elementClicked.classList.contains("entangle")) {
        cost = 23;
        damage = 9;
    } else if (elementClicked.classList.contains("dragon-blade")) {
        cost = 38;
        damage = 47;
    } else if (elementClicked.classList.contains("star-fire")) {
        cost = 33;
        damage = 25;
    }
    fungusGameData.updateGameData(cost, damage);
    console.log(fungusGameData);
    renderGame();
}

// update DOM based on state values
function renderGame() {
    // update hp & ap status text
    let hpTextElement = document.querySelector(".hp-text");
    let apTextElement = document.querySelector(".ap-text");
    hpTextElement.textContent = fungusGameData.fungusHP;
    apTextElement.textContent = fungusGameData.attackPoints;
    // update hp & ap progress bars
    let hpProgressElement = document.querySelector("#hp-meter");
    let apProgressElement = document.querySelector("#ap-meter");
    hpProgressElement.value = fungusGameData.fungusHP;
    apProgressElement.value = fungusGameData.attackPoints;
    // super regen fungus power if hp < 50
    if (fungusGameData.fungusHP < 50 && fungusGameData.regenPower === false) {
        // set a interval handler to start adding 50HP every 1000ms
        //      (delete handler when fungus is dead)
        let regenHP = setInterval(() => {fungusGameData.fungusHP += 50}, 1000);
        fungusGameData.regenPower = true;
    }
    // if fungus is dead and regen is on, turn off regen power and clear timer
    // if (fungusGameData.fungusHP === 0 && 
    //     fungusGameData.regenPower === true) {
    //     clearInterval(regenHP);
    //     fungusGameData.regenPower = false;
    // }
    // update fungus avatar if win or lose
    let freakyFungusElement = document.querySelector(".freaky-fungus");
    // if you win
    if (fungusGameData.fungusHP === 0) {
        freakyFungusElement.classList.replace("walk", "dead");
    // else if bad fungus wins
    } else if (fungusGameData.attackPoints === 0) {
        freakyFungusElement.classList.replace("walk", "jump");
        let attackButtonElements = document.getElementsByClassName("attack-btn");
        for (i=0; i<attackButtonElements.length; i++) {
          attackButtonElements[i].disabled = true;
        }
    } 
}
