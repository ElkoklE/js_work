import Archer from "./Archer";
import LongBow from "../weapons/LongBow";
export default class Crossbowman extends Archer {
    constructor(position, name) {
        super(position, name);
        this.life = 85;
        this.attack = 8;
        this.luck = 15;
        this.description = "Crossbowman";
        this.weapon = new LongBow();
    }
}