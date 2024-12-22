export default class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialDurability = durability;
    }

    takeDamage(damage) {
        this.durability = Math.max(this.durability - damage, 0);
    }

    getDamage() {
        if (this.isBroken()) {
            return 0;
        }
        if (this.durability >= this.initialDurability * 0.3) {
            return this.attack;
        }
        return this.attack / 2;
    }

    isBroken() {
        return this.durability <= 0;
    }
}
