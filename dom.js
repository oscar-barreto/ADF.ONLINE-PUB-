const startBtn = document.getElementById("start-btn");
const gamePanel = document.getElementById("game-panel");
const gameTitle = document.getElementById("game-title");
const inGamePanel = document.getElementById("ingame-panel");
const game = document.getElementById('game');
const heroName =document.getElementById("hero-name");
const mageBtn = document.getElementById("mage-btn");
const heroClass = document.getElementById("hero-class");
const warriorBtn = document.getElementById("warrior-btn")
const btnClassCon = document.getElementById("btn-con");
let summaryText = document.getElementById("level");
const capy = document.getElementById("capy");
const smirnoff = document.getElementById("smirnoff");
const battleVision = document.getElementById("story-bat");
const removeScreen = document.getElementById("removable-screen");
const healthBar = document.getElementById("health-bar");
const ManaBar = document.getElementById("mana-bar");
const hpRegen = document.getElementById("hp-re");
const heroAttack = document.getElementById("h-atk")
const manaRegen = document.getElementById("mana-re");
const enemyHp = document.getElementById("en-hp");
const enemyAtk = document.getElementById("en-atk");
const atkBtn = document.getElementById("btn-atk");
const continueBtn = document.getElementById("continue-btn");
const proceedContainer = document.querySelector(".proceed-container");
const healthPotionBtn = document.getElementById("health-potion-btn");
const skillBtn = document.getElementById("skill-shot");
const manaPotionBtn = document.getElementById("mana-potion-btn");
const goldSpan = document.getElementById("gold-count");
const buyManaPotions = document.getElementById("manapo-btn");
const buyHealthPotions = document.getElementById("healthpo-btn");
const leaveVillage = document.getElementById("leave-btn");
const dragonContinueBtn = document.getElementById("dragon-continue-btn");
const fightCapybara = document.getElementById("capy-attack");
const goToCastleButton = document.getElementById("castle-btn");
const fightPrincess = document.getElementById("fight-princess")


function loadPlayerStats(){
    healthBar.innerText = `Health Points: ${player.hp}`;
    ManaBar.innerText = `Mana Points:  ${player.mana}`;
    heroAttack.innerText = `Attack: ${player.atk}`;
    document.querySelector(".custom-hero").style.display = "block";
}
function loadMonsterStats(){
    enemyHp.innerText = `Health Points: ${monster.hp}`
    enemyAtk.innerText = `Attack: ${monster.atk}`
}
function loadBattleScreen(){
    battleVision.removeChild(removeScreen);
    document.querySelector(".custom-hero").style.display= "block";
    document.querySelector(".custom-enemy").style.display = "block";
};

function loadStoryScreen(){
    if(capybara.hp <= 0){
        fightCapybara.style.display = 'none';
    }
    if(dragon.hp<=0){
        dragonContinueBtn.style.display ="none";
    }
    if(grumpyPrincess.hp <= 0){
        fightPrincess.style.display = "none"
    }
    document.querySelector(".custom-hero").style.display= "none";
    document.querySelector(".custom-enemy").style.display= "none";
    battleVision.appendChild(removeScreen);
    removeScreen.appendChild(proceedContainer)
    proceedContainer.appendChild(continueBtn);
    continueBtn.style.display = "block";
};

function gameOver(){
        game.style.display ="none"
        alert("GAME OVER")
 };


startBtn.addEventListener("click", () =>{
    startBtn.style.display = "none";
    gameTitle.style.display = "none";
    gamePanel.style.backgroundColor = "black";

    const nameTitle = document.createElement("h2");
    nameTitle.innerText = "What is your name?"
    gamePanel.appendChild(nameTitle);
    const invInput = document.createElement("input");
    gamePanel.appendChild(invInput);
    const submitName = document.createElement("button");
    submitName.innerText = "Submit";
    submitName.style.cssText = 'margin:10px;'

    gamePanel.appendChild(submitName);
    submitName.addEventListener("click", ()=>{
    submitName.style.display = "none";
    nameTitle.style.display = "none";
    invInput.style.display = "none";
    inGamePanel.style.display = "block";
    game.removeChild(gamePanel);
    heroName.innerText = `${invInput.value} -`;        
    })

    invInput.style.display = "block";
});

// Warrior hero class button choice


warriorBtn.addEventListener("click", () =>{
    btnClassCon.style.display = 'none';
    let className = 'Warrior';
    heroClass.innerText = "Warrior - ";

    player = warrior;
    goldSpan.innerText = `${player.goldCoins}`
    document.getElementById("class-getter").style.display='none';
    summaryText.innerText = `You have made your first hard choice by choosing your class which is: ${className}, now you must choose which path you will take. Each path will affect what kind of adversities you may face, some paths will prove to be extremely challenging`;
    const proceedBtn =document.createElement("button");
    proceedBtn.innerText = 'Proceed';
    proceedBtn.classList.add("pro-btn");
    document.querySelector(".proceed-container").appendChild(proceedBtn);
    document.querySelector(".pro-btn").addEventListener("click", () =>{
        summaryText.innerText="You were chosen to rescue princess Valentine from the castle of Ilyria, the only way to rescue her is by crossing the entire Kingdom of Frankia. Fortunately the path to get there is not too complicated. Almost a straight line. Start by going to the field of Capybaras"
        document.querySelector(".pro-btn").style.display = "none";
        capy.style.display = "block";
    })
});


// Mage hero class button choice

mageBtn.addEventListener("click", () =>{
    btnClassCon.style.display = 'none';
    let className = 'Mage';
    heroClass.innerText = "Mage - ";

    player = mage;
    goldSpan.innerText = `${player.goldCoins}`
    document.getElementById("class-getter").style.display='none';
    summaryText.innerText =  `You have made your first hard choice by choosing your class which is: ${className}, now you must choose which path you will take. Each path will affect what kind of adversities you may face, some paths will prove to be extremely challenging`
    const proceedBtn =document.createElement("button");
    proceedBtn.innerText = 'Proceed';
    proceedBtn.classList.add("pro-btn");
    document.querySelector(".proceed-container").appendChild(proceedBtn);
    document.querySelector(".pro-btn").addEventListener("click", () =>{
        summaryText.innerText="You were chosen to rescue princess Valentine from the castle of Ilyria, the only way to rescue her is by crossing the entire Kingdom of Frankia. Fortunately there are multiple ways on how to get to her? Would you like to choose start by the field of Capybaras or the Mines or Smirnoff? "
        document.querySelector(".pro-btn").style.display = "none";
        capy.style.display = "block";
        smirnoff.style.display = "block";
    })
});

healthPotionBtn.addEventListener("click", () =>{
    player.useHealthPotion();
    healthBar.innerText = `Health Points: ${player.hp}`;
    document.getElementById("hpotion-count").innerText = `${player.healthPotions}`

})
manaPotionBtn.addEventListener("click", ()=>{
    player.useManaPotion();
    ManaBar.innerText = `Mana Points: ${player.mana}`;
    document.getElementById("mpotion-count").innerText = `${player.manaPotions}`        
});
skillBtn.addEventListener("click", ()=>{
    player.useSkill();
    enemyHp.innerText = `Health Points: ${monster.hp}`;
    ManaBar.innerText = `Mana Points:  ${player.mana}`;

    if(player.hp<=0){
        gameOver();
    }

    if (capybara.hp<=0 && monster == capybara){
        player.addGoldCoin();
        goldSpan.innerText = `${player.goldCoins}`;
        loadStoryScreen();
        summaryText.innerText = "Youve have slayed the fierce foe";
    }

    if(dragon.hp<=0 && monster == dragon){
        player.addGoldCoin();
        goldSpan.innerText = `${player.goldCoins}`
        loadStoryScreen();
        summaryText.innerText =  "You have defeated the great dragon, after this great feat you are finally ready to go to the castle and save the princess. Rumor says the evil spirit of Vegania has posessed her!";
        goToCastleButton.style.display = "block";
        continueBtn.style.display = "none";
        fightPrincess.display.style = "none"; 
    }

    if(grumpyPrincess.hp <=0 && monster == grumpyPrincess){
        player.addGoldCoin();
        goldSpan.innerText = `${player.goldCoins}`
        loadStoryScreen();
        summaryText.innerText =  "Congratulations you have rescued the princess. You saved the Kingdom of Frankia. As I thank you the princess has invited you to live in the castle and has asked for your to marry her";
        fightPrincess.style.display = "none";
        continueBtn.style.display = "none";
        goToCastleButton.style.display ="none";



    }
    if(player.hp<=0){
        gameOver();
    }
});

atkBtn.addEventListener("click", ()=>{
    monster.hp = monster.hp - player.atk;
    player.hp = player.hp - monster.atk;

    healthBar.innerText = `Health Points: ${player.hp}`;
    enemyHp.innerText = `Health Points: ${monster.hp}`;

    if(player.hp<=0){
        gameOver();
    }

    if(capybara.hp<=0 && monster == capybara){
        player.addGoldCoin();
        goldSpan.innerText = `${player.goldCoins}`
        loadStoryScreen();
        summaryText.innerText = "Youve have slayed the fierce foe";  
    }

    if(dragon.hp<=0 && monster == dragon){
        player.addGoldCoin();
        goldSpan.innerText = `${player.goldCoins}`
        loadStoryScreen();
        summaryText.innerText =  "You have defeated the great dragon, after this great feat you are finally ready to go to the castle and save the princess. Rumor says the evil spirit of Vegania has posessed her!";
        goToCastleButton.style.display = "block";
        continueBtn.style.display = "none";
        fightPrincess.display.style = "none";
    }

    if(grumpyPrincess.hp <=0 && monster == grumpyPrincess){
        player.addGoldCoin();
        goldSpan.innerText = `${player.goldCoins}`
        loadStoryScreen();
        summaryText.innerText =  "Congratulations you have rescued the princess. You saved the Kingdom of Frankia. As I thank you the princess has invited you to live in the castle and has asked for your to marry her";
        fightPrincess.style.display = "none";
        continueBtn.style.display = "none";
        goToCastleButton.style.display ="none";



    }
});


// CAPYBARA INTERACTIONS


capy.addEventListener("click", ()=>{
    capy.style.display = "none";
    smirnoff.style.display = "none";
    summaryText.innerText = "You arrive at the field of Capybaras. But the on the horizon you see a really obese capybara heading to attack you. Get ready to defend yourself!";
    fightCapybara.style.display = 'block';
});

// FIGHT CAPYBARA BUTTON

fightCapybara.addEventListener("click", ()=>{
    loadBattleScreen();
    monster = capybara;

    loadMonsterStats();

    loadPlayerStats();
    
    // if(capybara.hp<=0){
    //     player.addGoldCoin();
    //     goldSpan.innerText = `${player.goldCoins}`
    //     loadStoryScreen();
    //     summaryText.innerText = "You have slayed the fierce foe";  
    // }
    // if(player.hp<=0){
    //     gameOver();
    // }
    
});
// if(capybara.hp<=0){
//     player.addGoldCoin();
//     goldSpan.innerText = `${player.goldCoins}`
//     loadStoryScreen();        
// }
// if(player.hp<=0){
//     gameOver();
// }
// loadBattleScreen();

    // battleVision.removeChild(removeScreen);
    // document.querySelector(".custom-hero").style.display= "block";
    // document.querySelector(".custom-enemy").style.display = "block";

    // monster = capybara;

    // loadMonsterStats();

    // loadPlayerStats();
    // battleVision.removeChild(removeScreen);

// Smirnoff mines choice btn


continueBtn.addEventListener("click", ()=>{
    summaryText.innerText = "Welcome to the village Shop. Here you can buy potions before you continue on your journey";
    buyManaPotions.style.display = "block";
    buyHealthPotions.style.display = "block";
    leaveVillage.style.display = "block";
    continueBtn.style.display = "none";
});

buyHealthPotions.addEventListener("click", ()=>{
    player.addHealthPotion();
    player.useGoldCoin();
    goldSpan.innerText = `${player.goldCoins}`
    document.getElementById("hpotion-count").innerText = `${player.healthPotions}`
});
buyManaPotions.addEventListener("click", ()=>{
    player.addManaPotion();
    player.useGoldCoin();
    goldSpan.innerText = `${player.goldCoins}`
    document.getElementById("mpotion-count").innerText = `${player.manaPotions}`;          
});

leaveVillage.addEventListener("click", ()=>{
    summaryText.innerText = "Upon leaving the village. It became obvious that there would not be anymore more easy paths. You had to be on your way to face the Dragon Gribouille in the old ruins of EggPLantia";
    buyManaPotions.style.display = "none";
    buyHealthPotions.style.display = "none";
    leaveVillage.style.display = "none";
    dragonContinueBtn.style.display = "block";
});

dragonContinueBtn.addEventListener("click", ()=>{
    monster = dragon;
    loadBattleScreen();
    loadMonsterStats();

    if(dragon.hp <=0){
        player.addGoldCoin();
        goldSpan.innerText = `${player.goldCoins}`
        loadStoryScreen();
        summaryText.innerText =  "You have defeated the great dragon, after this great feat you are finally ready to go to the castle and save the princess. Rumor says the evil spirit of Vegania has posessed her!";
        goToCastleButton.style.display = "block";
        continueBtn.style.display = "none";
        fightPrincess.display.style = "none";


    }
    if(player.hp<=0){
        gameOver();
    }

});

goToCastleButton.addEventListener("click", ()=>{
    summaryText.innerText =  "You have arrived in the Castle. It is truly beautiful exactly how you remembered, back when things were simple and you were the princess secret lover. As you finally enter the main hall, you see the princess seating down with a purple chiasma behind her. She gets up and run towards you to attack you. Youve to defeat her to free her";
    goToCastleButton.style.display = "none";
    fightPrincess.style.display = "block";
});


fightPrincess.addEventListener("click", ()=>{
    monster = grumpyPrincess;
    loadBattleScreen();
    loadMonsterStats();

    // if(grumpyPrincess.hp <=0){
    //     player.addGoldCoin();
    //     goldSpan.innerText = `${player.goldCoins}`
    //     loadStoryScreen();
    //     summaryText.innerText =  "Congratulations you have rescued the princess. You saved the Kingdom of Frankia. As I thank you the princess has invited you to live in the castle and has asked for your to marry her";
    //     fightPrincess.style.display = "none";
    //     continueBtn.style.display = "none";
    //     goToCastleButton.style.display ="none";


    // }
    // if(player.hp<=0){
    //     gameOver();
    // }
})