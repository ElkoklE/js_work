import Arm from "../weapons/Arm";
import Knife from "../weapons/Knife";
export default class Player {
    constructor( name, position) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = "Player";
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
        this.otherWeapons = [new Arm(), new Knife()];
    }

    getLuck() {
        const randomNumber = Math.random() * 100;
        return (randomNumber + this.luck) / 100;
    }

    getDamage(distance) {
        if (distance > this.weapon.range) return 0;
        return ((this.attack + this.weapon.getDamage()) * this.getLuck()) / distance;
    }

    takeDamage(damage) {
        this.life = Math.max(this.life - damage, 0);
    }

    isDead() {
        return this.life === 0;
    }

    moveLeft(distance) {
        const moveDistance = Math.min(distance, this.speed);
        this.position -= moveDistance;
        console.log(`${this.name} moves left by ${moveDistance}. Position: ${this.position}`);
    }

    moveRight(distance) {
        const moveDistance = Math.min(distance, this.speed);
        this.position += moveDistance;
        console.log(`${this.name} moves right by ${moveDistance}. Position: ${this.position}`);
    }

    move(distance) {
        if (distance < 0) {
            this.moveLeft(-distance);
        } else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
        const chance = (100 - this.luck) / 100;
        const luck = this.getLuck();
        const blocked = luck > chance;
        console.log(`${this.name} ${blocked ? "blocks" : "fails to block"} the attack.`);
        return blocked;
    }

    dodged() {
        const chance = (100 - this.agility - this.speed * 3) / 100;
        const luck = this.getLuck();
        const dodged = luck > chance;
        console.log(`${this.name} ${dodged ? "dodges" : "fails to dodge"} the attack.`);
        return dodged;
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage(damage);
            this.checkWeapon();
        } else if (this.dodged()) {
            console.log(`${this.name} successfully dodged the attack.`);
        } else {
            this.takeDamage(damage);
            console.log(`${this.name} takes ${damage} damage.`);
        }
    }

    chooseEnemy(players) {
        const aliveEnemies = players.filter(player => player !== this && !player.isDead());
        const enemy = aliveEnemies.reduce((minEnemy, currentEnemy) =>
            (currentEnemy.life < minEnemy.life ? currentEnemy : minEnemy), aliveEnemies[0]);
        console.log(`${this.name} chooses ${enemy.name} as the target.`);
        return enemy;
    }

    moveToEnemy(enemy) {
        const distance = Math.abs(this.position - enemy.position);
        if (distance > 0) {
            const direction = this.position < enemy.position ? 1 : -1;
            this.move(direction * Math.min(this.speed, distance));
        }
    }

    tryAttack(enemy) {
        const distance = Math.abs(this.position - enemy.position);
        if (this.weapon.range >= distance) {
            const weaponDamage = this.weapon.getDamage();
            if (distance === 0) {
                enemy.moveRight(1);
                enemy.takeAttack(weaponDamage * 2);
                console.log(`${this.name} attacks ${enemy.name} with double damage!`);
            } else {
                enemy.takeAttack(weaponDamage);
                console.log(`${this.name} attacks ${enemy.name}!`);
            }
            this.weapon.takeDamage(10 * this.getLuck());
        } else {
            console.log(`${this.name} is too far to attack.`);
        }
    }

    checkWeapon() {
        if (this.weapon.isBroken()) {
            console.log(`${this.name}'s weapon (${this.weapon.name}) is broken.`);
            const availableWeapon = this.otherWeapons.find(w => !w.isBroken());
            if (availableWeapon) {
                this.weapon = availableWeapon;
                console.log(`${this.name} switches to a new weapon: ${this.weapon.name}.`);
            } else {
                this.weapon = new Arm();
                console.log(`${this.name} has no weapons left. Switching to Arm.`);
            }
        }
    }
}