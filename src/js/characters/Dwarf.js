import Warrior from "./Warrior";
import Axe from "../weapons/Axe";
export default class Dwarf extends Warrior {
    constructor(position, name) {
        super(position, name);
        this.life = 130;
        this.attack = 15;
        this.luck = 20;
        this.description = "Dwarf";
        this.weapon = new Axe();
    }

    takeDamage(damage) {
        if (Math.floor(Math.random() * 6) === 0 && this.getLuck() > 0.5) {
            super.takeDamage(damage / 2);
        } else {
            super.takeDamage(damage);
        }
    }
}