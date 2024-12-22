import Player from "./Player";
import Sword from "../weapons/Sword";
export default class Warrior extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 120;
        this.speed = 2;
        this.description = "Warrior";
        this.weapon = new Sword();
    }

    takeDamage(damage) {
        if (this.life <= this.life / 2 && this.getLuck() > 0.8 && this.magic > 0) {
            this.magic = Math.max(this.magic - damage, 0);
        } else {
            super.takeDamage(damage);
        }
    }
}
