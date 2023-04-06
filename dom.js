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
const summaryText = document.getElementById("level");
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



function loadPlayerStats(){
    healthBar.innerText = `Health points: ${player.hp}`;
    ManaBar.innerText = `Mana Points:  ${player.mana}`;
    heroAttack.innerText = `Attack: ${player.atk}`;
    hpRegen.innerText = `HP Regen: ${player.hpRegen}`;
    manaRegen.innerText = `Mana Regen : ${player.manaRegen}`;
    document.querySelector(".custom-hero").style.display = "block";
}
function loadMonsterStats(){
    enemyHp.innerText = `Health points: ${monster.hp}`
    enemyAtk.innerText = `Attack: ${monster.atk}`
}
function loadBattleScreen(){
    capy.style.display = "none";
    smirnoff.style.display = "none";
    battleVision.removeChild(removeScreen);
    document.querySelector(".custom-enemy").style.display = "block";
};

function loadStoryScreen(){
    document.querySelector(".custom-hero").style.display= "none";
    document.querySelector(".custom-enemy").style.display= "none";
    battleVision.appendChild(removeScreen);
    removeScreen.appendChild(proceedContainer)
    proceedContainer.appendChild(continueBtn);
    continueBtn.style.display = "block";
};
function loadVillage(){
    summaryText.innerText = "You have arrived in the Village of Gonomira. Resupply before you continue on your journey.";

};
function useHealthPotion(){
    let healthPotion = 1;
    document.getElementById("hpotion-count").innerText = `${healthPotion}`
}

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
    heroClass.innerText = "Warrior - ";

    player = warrior;

    document.getElementById("class-getter").style.display='none';
    summaryText.innerText = `You have nade your first hard choice by choosing your class which is: ${heroClass.innerHTML}, now you must choose which path you will take. Each path will affect what kind of adversities you may face, some paths will prove to be extremely challenging`;
    const proceedBtn =document.createElement("button");
    proceedBtn.innerText = 'Proceed';
    proceedBtn.classList.add("pro-btn");
    document.querySelector(".proceed-container").appendChild(proceedBtn);
    document.querySelector(".pro-btn").addEventListener("click", () =>{
        summaryText.innerText="You were chosen to rescue princess Valentine from the castle of Ilyria, the only way to rescue her is by crossing the entire Kingdom of Abundriel. Fortunately there are multiple ways on how to get to her? Would you like to choose start by the field of Capybaras or the Mines or Smirnoff? "
        document.querySelector(".pro-btn").style.display = "none";
        capy.style.display = "block";
        smirnoff.style.display = "block";
    })
});


// Mage hero class button choice

mageBtn.addEventListener("click", () =>{
    btnClassCon.style.display = 'none';
    heroClass.innerText = "Mage - ";

    player = mage;

    document.getElementById("class-getter").style.display='none';
    summaryText.innerText =  `You have nade your first hard choice by choosing your class which is: ${heroClass.innerHTML}, now you must choose which path you will take. Each path will affect what kind of adversities you may face, some paths will prove to be extremely challenging`
    const proceedBtn =document.createElement("button");
    proceedBtn.innerText = 'Proceed';
    proceedBtn.classList.add("pro-btn");
    document.querySelector(".proceed-container").appendChild(proceedBtn);
    document.querySelector(".pro-btn").addEventListener("click", () =>{
        summaryText.innerText="You were chosen to rescue princess Valentine from the castle of Ilyria, the only way to rescue her is by crossing the entire Kingdom of Abundriel. Fortunately there are multiple ways on how to get to her? Would you like to choose start by the field of Capybaras or the Mines or Smirnoff? "
        document.querySelector(".pro-btn").style.display = "none";
        capy.style.display = "block";
        smirnoff.style.display = "block";
    })
});
// Capybara field choice btn




capy.addEventListener("click", ()=>{
    summaryText.innerText = "You arrive at the field of Capybaras. But the on the horizon you see a really obese capybara heading to attack you. Get ready to defend yourself!";
    
    loadBattleScreen();
    
    // capy.style.display = "none";
    // smirnoff.style.display = "none";
    // battleVision.removeChild(removeScreen);
    // document.querySelector(".custom-enemy").style.display = "block";
    monster = capybara;

    loadMonsterStats();

    // enemyHp.innerText = `Health points: ${capybara.hp}`
    // enemyAtk.innerText = `Attack: ${capybara.atk}`

    loadPlayerStats();

    
        // if(heroClass.innerText === "Warrior"){
        // healthBar.innerText = `Health points: ${warrior.hp}`;
        // ManaBar.innerText = `Mana Points:  ${warrior.mana}`;
        // heroAttack.innerText = `Attack: ${warrior.atk}`;
        // hpRegen.innerText = `HP Regen: ${warrior.hpRegen}`;
        // manaRegen.innerText = `Mana Regen : ${warrior.manaRegen}`;
        // document.querySelector(".custom-hero").style.display = "block";
        // } else{
        //     healthBar.innerText = `Health points: ${mage.hp}`;
        //     ManaBar.innerText = `Mana Points:  ${mage.mana}`;
        //     heroAttack.innerText = `Attack: ${mage.atk}`;
        //     hpRegen.innerText = `HP Regen: ${mage.hpRegen}`;
        //     manaRegen.innerText = `Mana Regen : ${mage.manaRegen}`;
        //     document.querySelector(".custom-hero").style.display = "block";
        //     }
        healthPotionBtn.addEventListener("click", ()=>{
            player.hp = player.hp + 5;
            useHealthPotion();
            healthPotionCount();
            healthBar.innerText = `Health points: ${player.hp}`;
        });
        manaPotionBtn.addEventListener("click", ()=>{
            player.mana = player.mana + 4;
            ManaBar.innerText = `Mana Points: ${player.mana}`;
        });

        skillBtn.addEventListener("click", ()=>{
            monster.hp = monster.hp - 4;
            player.mana = player.man -4;
            enemyHp.innerText = `Health points: ${monster.hp}`;
            if(monster.hp<=0){
                loadStoryScreen();
                summaryText.innerText = "You have defeated your first mighty foe. The Capybara King. Now you must go to the nearby village in and resupply";
                
            }
        })

        atkBtn.addEventListener("click", ()=>{
                monster.hp = monster.hp - player.atk;
                player.hp = player.hp - monster.atk;

                healthBar.innerText = `Health points: ${player.hp}`;
                enemyHp.innerText = `Health points: ${monster.hp}`;
                if(monster.hp<=0){
                    // document.querySelector(".custom-hero").style.display= "none";
                    // document.querySelector(".custom-enemy").style.display= "none";
                    // battleVision.appendChild(removeScreen);
                    // summaryText.innerText = "You have slayed the fierce foe, known as the king Capybara"

                    loadStoryScreen();
                    summaryText.innerText = "You have defeated your first mighty foe. The Capybara King. Now you must go to the nearby village in and resupply";
                    
                }
                if(player.hp<=0){
                    alert("Game Over");
                }
            }
        )  
});


// Smirnoff mines choice btn


smirnoff.addEventListener("click", ()=>{
    summaryText.innerText = "You arrive at the Mines of Smirnoff. But then you see on the horizon an angry dwarf holding his sword charging towards you. Get ready to defend yourself!";
    capy.style.display = "none";
    smirnoff.style.display = "none"; 
    battleVision.removeChild(removeScreen);

    monster=dwarf;

    document.querySelector(".custom-enemy").style.display = "block";
    enemyHp.innerText = `Health points: ${monster.hp}`
    enemyAtk.innerText = `Attack: ${monster.atk}`

    loadPlayerStats();

    loadMonsterStats();

    healthPotionBtn.addEventListener("click", ()=>{
        player.hp = player.hp + 5;
        healthBar.innerText = `Health points: ${player.hp}`;
    });
    manaPotionBtn.addEventListener("click", ()=>{
        player.mana = player.mana + 4;
        ManaBar.innerText = `Mana Points: ${player.mana}`;
    });

    skillBtn.addEventListener("click", ()=>{
        monster.hp = monster.hp - 4;
        player.mana = player.man -4;
        enemyHp.innerText = `Health points: ${monster.hp}`;
        if(monster.hp<=0){
            loadStoryScreen();
            summaryText.innerText = "You have just slayed the Dwarf lord and you may proceed in your journey. Stop at the nearby village to resupply"
            
        }
    })

    atkBtn.addEventListener("click", ()=>{
        monster.hp = monster.hp - player.atk;
        player.hp = player.hp - monster.atk;

        healthBar.innerText = `Health points: ${player.hp}`;
        enemyHp.innerText = `Health points: ${monster.hp}`;
        if(monster.hp<=0){
            document.querySelector(".custom-hero").style.display= "none";
            document.querySelector(".custom-enemy").style.display= "none";
            battleVision.appendChild(removeScreen);
            summaryText.innerText = "You have just slayed the Dwarf lord and you may proceed in your journey. Stop at the nearby village to resupply"
        }
        if(player.hp<=0){
            alert("Game Over");
        }
    }
)
})