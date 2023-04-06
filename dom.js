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
    heroName.innerText = `${invInput.value}`;        
    })

    invInput.style.display = "block";
});

warriorBtn.addEventListener("click", () =>{
    mageBtn.style.display = "none";
    warriorBtn.style.display = "none";
    rogueBtn.style.display = "none";
    heroClass.innerText = "- Warrior";
    document.getElementById("class-getter").style.display='none';
});
mageBtn.addEventListener("click", () =>{
    mageBtn.style.display = "none";
    warriorBtn.style.display = "none";
    rogueBtn.style.display = "none";
    heroClass.innerText = "- Mage"
    document.getElementById("class-getter").style.display='none';
});
rogueBtn.addEventListener("click", () =>{
    mageBtn.style.display = "none";
    warriorBtn.style.display = "none";
    rogueBtn.style.display = "none";
    heroClass.innerText = "- rogue";
    document.getElementById("class-getter").style.display='none';
})