import Arm from "../weapons/Arm";
import Sword from "../weapons/Sword";
import Axe from "../weapons/Axe";
import Bow from "../weapons/Bow";
import LongBow from "../weapons/LongBow";
import Staff from "../weapons/Staff";
import StormStaff from "../weapons/StormStaff";
import Knife from "../weapons/Knife";
import Weapon from "../weapons/Weapon";

describe("Weapon class and its subclasses", () => {
    test("Weapon class: basic methods", () => {
        const weapon = new Weapon("Test Weapon", 10, 100, 2);
        expect(weapon.name).toBe("Test Weapon");
        expect(weapon.attack).toBe(10);
        expect(weapon.durability).toBe(100);
        expect(weapon.range).toBe(2);

        weapon.takeDamage(30);
        expect(weapon.durability).toBe(70);

        weapon.takeDamage(100);
        expect(weapon.durability).toBe(0);
        expect(weapon.isBroken()).toBe(true);

        expect(weapon.getDamage()).toBe(0);
    });

    test("Arm class: infinite durability", () => {
        const arm = new Arm();
        expect(arm.name).toBe("Arm");
        expect(arm.attack).toBe(1);
        expect(arm.durability).toBe(Infinity);
        expect(arm.range).toBe(1);
    });

    test("Bow class: damage calculation", () => {
        const bow = new Bow();
        expect(bow.name).toBe("Bow");
        expect(bow.attack).toBe(10);
        expect(bow.range).toBe(3);

        bow.takeDamage(50);
        expect(bow.durability).toBe(150);

        bow.takeDamage(120);
        expect(bow.durability).toBe(30);
        expect(bow.getDamage()).toBe(5);

        bow.takeDamage(40);
        expect(bow.durability).toBe(0);
        expect(bow.isBroken()).toBe(true);
    });

    test("Sword class: damage calculation", () => {
        const sword = new Sword();
        expect(sword.name).toBe("Sword");
        expect(sword.attack).toBe(25);
        expect(sword.durability).toBe(500);

        sword.takeDamage(200);
        expect(sword.durability).toBe(300);
        expect(sword.getDamage()).toBe(25);

        sword.takeDamage(350);
        expect(sword.durability).toBe(0);
        expect(sword.getDamage()).toBe(0);
    });

    test("Knife class: properties", () => {
        const knife = new Knife();
        expect(knife.name).toBe("Knife");
        expect(knife.attack).toBe(5);
        expect(knife.durability).toBe(300);
        expect(knife.range).toBe(1);
    });

    test("Staff class: properties", () => {
        const staff = new Staff();
        expect(staff.name).toBe("Staff");
        expect(staff.attack).toBe(8);
        expect(staff.durability).toBe(300);
        expect(staff.range).toBe(2);
    });

    test("LongBow class: properties", () => {
        const longBow = new LongBow();
        expect(longBow.name).toBe("LongBow");
        expect(longBow.attack).toBe(15);
        expect(longBow.range).toBe(4);
    });

    test("Axe class: properties", () => {
        const axe = new Axe();
        expect(axe.name).toBe("Axe");
        expect(axe.attack).toBe(27);
        expect(axe.durability).toBe(800);
        expect(axe.range).toBe(1);
    });

    test("StormStaff class: properties", () => {
        const stormStaff = new StormStaff();
        expect(stormStaff.name).toBe("StormStaff");
        expect(stormStaff.attack).toBe(10);
        expect(stormStaff.range).toBe(3);
    });
});