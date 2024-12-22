import Dwarf from "./characters/Dwarf";
import Crossbowman from "./characters/Crossbowman";
import Demiurge from "./characters/Demiurge";
import Warrior from "./characters/Warrior";
import Archer from "./characters/Archer";
import Mage from "./characters/Mage";

export function play() {
    console.log('Game started');

    // Создаём персонажей
    const warrior = new Warrior();
    const archer = new Archer();
    const mage = new Mage();
    const dwarf = new Dwarf();
    const crossbowman = new Crossbowman();
    const demiurge = new Demiurge();

    // Для примера выведем их в консоль
    console.log('Warrior:', warrior);
    console.log('Archer:', archer);
    console.log('Mage:', mage);
    console.log('Dwarf:', dwarf);
    console.log('Crossbowman:', crossbowman);
    console.log('Demiurge:', demiurge);

    console.log('Game finished');
}