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
    } else if (elementClicked.classlist.contains("star-fire")) {
        cost = 33;
        damage = 25;
    }
    fungusGameData.updateGameData(cost, damage);
    console.log(fungusGameData);
    renderGame();
}



// update DOM based on state values
function renderGame() {
    let freakyFungusElement = document.getElementById("")
    // if bad fungus wins
    if (fungusGameData.attackPoints === 0) {}

    freakyFungusElement = replace("walk", "jump");
    let attackButtonElements = document.getElementsByClassName("attack-btn");
    for (i=0; i<attackButtonElements.length; i++) {
        attackButtonElements[i].disabled = true;
    }
}