class Hero {
    constructor(hp,hpRegen,atk,mana, manaRegen){
        this.hp =12;
        this.hpRegen = 0.5;
        this.atk= Math.floor(Math.random()*5);
        this.mana = 10;
        this.manaRegen = 0.3;
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
class Warrior extends Hero {
    constructor(hp,hpRegen,atk,mana, manaRegen){
        super(hp,hpRegen,atk,mana, manaRegen)
        this.hp= this.hp + 2;
        this.atk = this.atk + 1;
        this.mana = this.mana -2;
        this.manaRegen = this.manaRegen - 0.1;
    }
    
}
class Mage extends Hero {
    constructor(hp,hpRegen,atk,mana, manaRegen){
        super(hp,hpRegen,atk,mana, manaRegen)
        this.hp= this.hp -2;
        this.mana = this.mana +1;
        this.atk = this.atk +1;
        this.manaRegen = this.manaRegen +0.2;
    }
    
}
class Rogue extends Hero {
    constructor(hp,hpRegen,atk,mana, manaRegen){
        super(hp,hpRegen,atk,mana, manaRegen)
        this.hp= this.hp -2;
        this.mana = this.mana -1;
        this.attack = this.atk +2;
    }
}