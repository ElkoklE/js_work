import Warrior from "./Warrior";
import Axe from "../weapons/Axe";
export default class Dwarf extends Warrior {constructor() {
    super();
    this.weapon = new Axe();
}}