import Sword from "./Sword";
export default class Axe extends Sword{
    constructor() {
        super();
        this.name = "Axe";
        this.attack = 27;
        this.durability = 800;
        this.initialDurability = 800;
}}