class Hero {
    constructor(hp,hpRegen,atk,mana,manaRegen){
        this.hp =hp;
        this.hpRegen = hpRegen;
        // this.atk= Math.floor(Math.random()*5+1);
        this.atk = atk;
        this.mana = mana;
        this.manaRegen = manaRegen;
    }
    getAttack(){
        return this.atk
    }
    receiveDamage(damage){
        this.hp = this.hp-damage
    }
    useSkill(){
        this.mana = this.mana - manaCost
    }
}

class Enemy{
    constructor(hp,atk){
        this.hp = hp;
        this.atk =atk;
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


let warrior = new Hero(12,0.5,1,8,0.3);
let mage = new Hero(8,0.3,Math.floor(Math.random()*5),12,0.5);
let capybara = new Enemy(5,3);
