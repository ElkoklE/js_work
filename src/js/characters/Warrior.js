import Player from "./Player";
import Sword from "../weapons/Sword";
export default class Warrior extends Player {constructor() {
    super();
    this.weapon = new Sword();
}}