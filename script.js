// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;
let attackPoints = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    document.querySelector(".attacks").addEventListener("click", attackFungus);
    console.log("hello")
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
onReady()

function attackFungus(event) {
    let elementClicked = event.target;
    let freakyFungusElement = document.querySelector(".freaky-fungus");
    let apCost, HPdamage;
    if (elementClicked.classList.contains("arcane-scepter")) {
        apCost = 12;
        HPdamage = 14;
    } else if (elementClickedclassList.contains("entangle")) {
        apCost = 23;
        HPdamage = 9;
    } else if (elementClicked.classList.contains("dragon-blade")) {
        apCost = 38;
        HPdamage = 47;
    } else if (elementClicked.classlist.contains("star-fire")) {
        apCost = 33;
        HPdamage = 25;
    }
    attackPoints -= apCost;
    fungusHP -= HPdamage;
    if (attackPoints <= 0) {
        attackPoints = 0;
        freakyFungusElement = replace("walk", "jump");
        let attackButtonElements = document.getElementsByClassName("attack-btn");
        for (i=0; i<attackButtonElements.length; i++) {
            attackButtonElements[i].disabled = true;
        }
    }
}