import Mage from "./Mage";
import StormStaff from "../weapons/StormStaff";
export default class Demiurge extends Mage {constructor() {
    super();
    this.weapon = new StormStaff();
}}