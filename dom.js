const startBtn = document.getElementById("start-btn");
const gamePanel = document.getElementById("game-panel");
const gameTitle = document.getElementById("game-title");
const inGamePanel = document.getElementById("ingame-panel");
const game = document.getElementById('game');
const heroName =document.getElementById("hero-name");
const rogueBtn = document.getElementById("rogue-btn");
const mageBtn = document.getElementById("mage-btn");
const heroClass = document.getElementById("hero-class");
const warriorBtn = document.getElementById("warrior-btn")
const btnClassCon = document.getElementById("btn-con");
const summaryText = document.getElementById("level");
const capy = document.getElementById("capy");
const smirnoff = document.getElementById("smirnoff");
const battleVision = document.getElementById("story-bat");
const removeScreen = document.getElementById("removable-screen");




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

warriorBtn.addEventListener("click", () =>{
    btnClassCon.style.display = 'none'
    heroClass.innerText = "Warrior";
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
mageBtn.addEventListener("click", () =>{
    btnClassCon.style.display = 'none'
    heroClass.innerText = "Mage"
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
rogueBtn.addEventListener("click", () =>{
    btnClassCon.style.display = 'none'
    heroClass.innerText = "Rogue";
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

capy.addEventListener("click", ()=>{
    summaryText.innerText = "You arrive at the field of Capybaras. But the on the horizon you see a really obese capybara heading to attack you. Get ready to defend yourself!";
    capy.style.display = "none";
    smirnoff.style.display = "none";
    battleVision.removeChild(removeScreen);
});
smirnoff.addEventListener("click", ()=>{
    summaryText.innerText = "You arrive at the Mines of Smirnoff. But then you see on the horizon an angry dwarf holding his sword charging towards you. Get ready to defend yourself!";
    capy.style.display = "none";
    smirnoff.style.display = "none"; 
    battleVision.removeChild(removeScreen);
})