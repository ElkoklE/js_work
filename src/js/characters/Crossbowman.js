import Archer from "./Archer";
import LongBow from "../weapons/LongBow";
export default class Crossbowman extends Archer {constructor() {
    super();
    this.weapon = new LongBow();
}}