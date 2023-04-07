class Hero {
    constructor(hp,atk,mana,healthPotions,manaPotions,goldCoins){
        this.hp =hp;
        this.atk = atk;
        this.mana = mana;
        this.healthPotions = healthPotions;
        this.manaPotions = manaPotions;
        this.goldCoins = goldCoins;
    }
    useSkill(){
        if(player.mana<4){
            return;
        }
        player.mana = player.mana - 4;
        monster.hp = monster.hp -4;
    }
    addGoldCoin(){
        player.goldCoins = player.goldCoins + monster.goldCoins;
    }
    useGoldCoin(){
        if(this.goldCoins<=0){
            return
        }
        this.goldCoins -= 10;
    }
    useManaPotion(){
        if(!this.manaPotions){
            return
        }
        this.manaPotions --;
        this.mana+=4;
    }
    addManaPotion(){
        if(this.goldCoins<=0){
            return
        }
        this.goldCoins = player.goldCoins - 10;
        this.manaPotions++;
    }

    useHealthPotion(){
        if(!this.healthPotions){
            return
        }
        this.healthPotions --;
        this.hp+=5;
    }
    addHealthPotion(){
        if(this.goldCoins<=0){
            return
        }
        this.goldCoins = player.goldCoins - 10;
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

let warrior = new Hero(12,2,8,1,1,50);
let mage = new Hero(8,1,12,1,1,50);
let capybara = new Enemy(5,3,40);
let dwarf = new Enemy(6,2,40);
let dragon = new Enemy(15,4,50);
let player;
let monster;
