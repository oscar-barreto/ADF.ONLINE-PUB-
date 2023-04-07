class Hero {
    constructor(hp,hpRegen,atk,mana,manaRegen,healthPotions,manaPotions,goldCoins){
        this.hp =hp;
        this.hpRegen = hpRegen;
        this.atk = atk;
        this.mana = mana;
        this.manaRegen = manaRegen;
        this.healthPotions = healthPotions;
        this.manaPotions = manaPotions;
        this.goldCoins = goldCoins;
    }
    addGoldCoin(){
        player.goldCoins = player.goldCoins + monster.goldCoins;
    }
    useManaPotion(){
        if(!this.manaPotions){
            return
        }
        this.manaPotions --;
        this.mana+=4;
    }
    addManaPotion(){
        if(!this.goldCoins){
            return
        }
        this.goldCoins = this.goldCoins - 20;
        this.ManaPotions++;
    }

    useHealthPotion(){
        if(!this.healthPotions){
            return
        }
        this.healthPotions --;
        this.hp+=5;
    }
    addHealthPotion(){
        if(!this.goldCoins){
            return
        }
        this.goldCoins = this.goldCoins - 20;
        this.healthPotions++;
    }
}

class Enemy{
    constructor(hp,atk,goldCoins){
        this.hp = hp;
        this.atk =atk;
        this.goldCoins = goldCoins;
    }
}
// class Warrior extends Hero {
//     constructor(hp,hpRegen,atk,mana, manaRegen){
//         super(hp,hpRegen,atk,mana, manaRegen)
//         this.hp= this.hp + 2;
//         this.atk = this.atk + 1;
//         this.mana = this.mana -2;
//         this.manaRegen = this.manaRegen - 0.1;
//     }
    
// }
// class Mage extends Hero {
//     constructor(hp,hpRegen,atk,mana, manaRegen){
//         super(hp,hpRegen,atk,mana, manaRegen)
//         this.hp= this.hp -2;
//         this.mana = this.mana +1;
//         this.atk = this.atk +1;
//         this.manaRegen = this.manaRegen +0.2;
//     }
    
// }

let warrior = new Hero(12,0.5,2,8,0.3,1,1,50);
let mage = new Hero(8,0.3,1,12,0.5,1,1,50);
let capybara = new Enemy(5,3,40);
let dwarf = new Enemy(6,2,40);
let player;
let monster;
