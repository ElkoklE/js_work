import Player from "./Player";
import Staff from "../weapons/Staff";
export default class Mage extends Player {constructor() {
    super();
    this.weapon = new Staff();
}}