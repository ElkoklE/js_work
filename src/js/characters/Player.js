import Arm from "../weapons/Arm";
import Knife from "../weapons/Knife";
export default class Player {constructor() {
    this.weapon = new Arm();
    this.secondWeapon = new Knife();
}}
