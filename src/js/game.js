import Dwarf from "./characters/Dwarf.js";
import Crossbowman from "./characters/Crossbowman.js";
import Demiurge from "./characters/Demiurge.js";
import Warrior from "./characters/Warrior.js";
import Archer from "./characters/Archer.js";
import Mage from "./characters/Mage.js";

function updatePlayersDisplay(players) {
    const playersDiv = document.getElementById('players');
    playersDiv.innerHTML = ''; // Очистить текущее отображение

    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.id = player.name;

        playerDiv.innerHTML = `
            <h3>${player.name}</h3>
            <p>Жизнь: ${player.life}</p>
            <p>Магия: ${player.magic}</p>
            <p>Скорость: ${player.speed}</p>
            <p>Атака: ${player.attack}</p>
            <p>Ловкость: ${player.agility}</p>
            <p>Удача: ${player.luck}</p>
            <p>Оружие: ${player.weapon.name}</p>
        `;

        playersDiv.appendChild(playerDiv);
    });
}

function addLog(message) {
    const logDiv = document.getElementById('log');
    const p = document.createElement('p');
    p.textContent = message;
    logDiv.appendChild(p);
    logDiv.scrollTop = logDiv.scrollHeight;
}

export function play() {
    console.log('Game started');
    addLog('Игра началась!');

    const players= [
        new Warrior('player1', 0),
        new Archer('player2', 2),
        new Mage('player3',4),
        new Dwarf('player4',3),
        new Crossbowman('player5', 1),
        new Demiurge('player6',8),
    ];

    updatePlayersDisplay(players);

    players.forEach(player => {
        console.log(`${player.name}:`, player);
        addLog(`${player.name} присоединился к игре.`);
    });

    function gameLoop() {
        if (players.filter(player => !player.isDead()).length <= 1) {
            const winner = players.find(player => !player.isDead());
            if (winner) {
                console.log(`Победитель: ${winner.name}!`);
                addLog(`Победитель: ${winner.name}!`);
            } else {
                console.log('Никто не выжил!');
                addLog('Никто не выжил!');
            }
            return;
        }

        players.forEach(player => {
            if (!player.isDead()) {
                turn(player, players);
                updatePlayersDisplay(players);
            }
        });

        setTimeout(gameLoop, 1000);
    }

    gameLoop();
}

export function turn(player, players) {
    const enemy = player.chooseEnemy(players);
    player.moveToEnemy(enemy);
    player.tryAttack(enemy);

    addLog(`${player.name} атаковал ${enemy.name}.`);
}

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-button').disabled = true;
    play();
});