const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variables del juego
let trees = [];
let monsters = [];
let batteries = [];
let battery = null;
let flashlightUses = 0;
let flashlightReady = false;
let batteriesCollected = 0;
let gameStarted = false;
let gameOver = false;
let gameTime = 0;
let gameInterval = null;
let treeHits = {};
let forestPatternTimer = null;
let restartButton = null;

// Velocidad y tamaños
const movementSpeed = 10;
const batterySize = 45;
const monsterSpeed = 20;

function startGame() {
  gameStarted = true;
  player = PlayerFactory();
  startTimer();
  generateMonsters();
  generateTrees();
  drawEnvironment();

  if (forestPatternTimer) clearInterval(forestPatternTimer);
  forestPatternTimer = setInterval(changeForestPattern, 10000);

  const startButton = document.querySelector("button");
  if (startButton) startButton.remove();

  window.addEventListener("keydown", handleKeyPress);
}

// === Factory===
function generateMonsters() {
  monsters = [];
  const numberOfMonsters = 5;

  for (let i = 0; i < numberOfMonsters; i++) {
    monsters.push(MonsterFactory());
  }
}

function MonsterFactory() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: Math.random() < 0.5 ? 1 : -1,
    dy: Math.random() < 0.5 ? 1 : -1,
  };
}

function generateTrees() {
  trees = [];
  for (let i = 0; i < 20; i++) {
    trees.push(TreeFactory());
  }
}

function TreeFactory() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
  };
}
function changeForestPattern() {
  trees = [];
  generateTrees();

  if (batteriesCollected < 5) {
    batteries = [];
    for (let i = 0; i < 2; i++) {
      batteries.push({
        x: Math.random() * (canvas.width - 15),
        y: Math.random() * (canvas.height - 15),
      });
    }
  }
}

function PlayerFactory() {
  return {
    x: 100,
    y: 100,
    size: 20,
    color: "green",
    direction: 0,
  };
}

let player = PlayerFactory();
// === FIN: Objetos del juego ===
// === FIN: Factory===

// === Flyweight===
// === Dibujar entorno ===
// Imágenes del juego

const images = {
  tree: new Image(),
  monster: new Image(),
  battery: new Image(),
};

images.tree.src = "./assets/tree.png";
images.monster.src = "./assets/monster.png";
images.battery.src = "./assets/battery.png";

images.tree.onload = () => console.log("Imagen de árbol cargada.");
images.monster.onload = () => console.log("Imagen de monstruo cargada.");
images.battery.onload = () => console.log("Imagen de batería cargada.");

function drawEnvironment() {
  if (!gameStarted) return;

  if (!trees || !monsters || !batteries) {
    console.warn("Faltan datos para dibujar el entorno.");
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  trees.forEach((tree) => {
    ctx.drawImage(images.tree, tree.x, tree.y, 50, 50);
  });

  monsters.forEach((monster) => {
    ctx.drawImage(images.monster, monster.x, monster.y, 50, 50);
  });

  batteries.forEach((battery) => {
    ctx.drawImage(
      images.battery,
      battery.x,
      battery.y,
      batterySize,
      batterySize
    );
  });

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(`Tiempo: ${gameTime}s`, 10, 30);

  function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
  }
  drawPlayer();
}
// === FIN: Flyweight===

// === Función de prueba===
// === Monitoreo de memoria mejorado ===
function testMemoryUsage() {
  console.log("Prueba con flyweight");
  drawEnvironment();
  console.log("Prueba con flyweight");
  const stopMonitoring = monitorMemoryRealTime();
}
testMemoryUsage();

function monitorMemoryRealTime(duration = 60000) {
  if (!performance.memory) {
    console.warn("API de memoria no soportada en este navegador.");
    return;
  }

  let intervalId = null;
  let elapsedTime = 0;

  intervalId = setInterval(() => {
    const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
    console.clear();
    console.log(
      `Memoria usada: ${(usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`
    );
    console.log(
      `Memoria total asignada: ${(totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`
    );

    elapsedTime += 1000;
    if (elapsedTime >= duration) {
      stopMonitoring();
    }
  }, 1000);

  const stopMonitoring = () => {
    if (intervalId) {
      clearInterval(intervalId);
      console.log("Monitoreo de memoria detenido.");
    }
  };

  return stopMonitoring;
}
// === Función de prueba===
// === Monitoreo de memoria mejorado ===

function createStartButton() {
  const startButton = document.createElement("button");
  startButton.innerText = "Iniciar Juego";
  startButton.addEventListener("click", startGame);
  document.body.appendChild(startButton);
}

function createRestartButton() {
  if (restartButton) return;
  restartButton = document.createElement("button");
  restartButton.innerText = "Reiniciar Juego";
  restartButton.addEventListener("click", restartGame);
  document.body.appendChild(restartButton);
}

// === Inicialización del juego ===

function restartGame() {
  gameOver = false;
  gameTime = 0;
  treeHits = {};
  monsters = [];
  trees = [];
  batteries = [];
  battery = null;
  flashlightUses = 0;
  flashlightReady = false;
  batteriesCollected = 0;

  if (restartButton) restartButton.remove();
  restartButton = null;

  const gameMessages = document.getElementById("gameMessages");
  gameMessages.innerText = "";

  startGame();
}

// === Generación deL bosque ===

// === Funciones del juego ===

function handleKeyPress(event) {
  if (gameOver) return;

  switch (event.key) {
    case "ArrowUp":
      movePlayer(0, -movementSpeed);
      player.direction = 0;
      break;
    case "ArrowDown":
      movePlayer(0, movementSpeed);
      player.direction = 180;
      break;
    case "ArrowLeft":
      movePlayer(-movementSpeed, 0);
      player.direction = 270;
      break;
    case "ArrowRight":
      movePlayer(movementSpeed, 0);
      player.direction = 90;
      break;
    case "z":
      useFlashlight();
      break;
  }
}

function movePlayer(dx, dy) {
  if (gameOver) return;

  const newX = player.x + dx;
  const newY = player.y + dy;

  if (newX >= 0 && newX <= canvas.width - player.size) player.x = newX;
  if (newY >= 0 && newY <= canvas.height - player.size) player.y = newY;

  checkCollisions();
  drawEnvironment();
}

function useFlashlight() {
  if (!flashlightReady || flashlightUses <= 0) {
    updateMessage("¡Linterna no lista o sin usos!");
    return;
  }

  flashlightUses--;
  updateMessage(`Linterna activada! Usos restantes: ${flashlightUses}`);
  flashlightReady = false;
  setTimeout(() => {
    flashlightReady = true;
    flashlightUses++;
  }, 5000);

  monsters = monsters.filter((monster) => {
    const distance = Math.sqrt(
      (player.x - monster.x) ** 2 + (player.y - monster.y) ** 2
    );
    return distance > 50;
  });

  checkWinCondition();
}

function updateMonsters() {
  monsters.forEach((monster) => {
    const dx = player.x - monster.x;
    const dy = player.y - monster.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    if (distance > 0) {
      monster.x += (dx / distance) * monsterSpeed;
      monster.y += (dy / distance) * monsterSpeed;
    }
  });

  checkWinCondition();
}

// === Dibujar entorno ===

// === Colisiones y condiciones ===

function checkCollisions() {
  // Árboles
  trees.forEach((tree, index) => {
    if (
      player.x < tree.x + 50 &&
      player.x + player.size > tree.x &&
      player.y < tree.y + 50 &&
      player.y + player.size > tree.y
    ) {
      updateMessage("Colisión con árbol");
      treeHits[index] = (treeHits[index] || 0) + 1;

      if (treeHits[index] === 1) {
        player.color = "orange";
      } else if (treeHits[index] === 2) {
        player.color = "red";
        endGame();
      }
    }
  });

  // Baterías
  batteries.forEach((battery, index) => {
    if (
      player.x < battery.x + batterySize &&
      player.x + player.size > battery.x &&
      player.y < battery.y + batterySize &&
      player.y + player.size > battery.y
    ) {
      batteriesCollected++;
      updateMessage(`Batería recolectada. Total: ${batteriesCollected}`);
      batteries.splice(index, 1);

      if (batteriesCollected === 5) {
        flashlightReady = true;
        flashlightUses = 3;
        updateMessage("¡Linterna recargada y lista para usarse!");
      }
    }
  });

  // Monstruos
  monsters.forEach((monster) => {
    if (
      player.x < monster.x + 50 &&
      player.x + player.size > monster.x &&
      player.y < monster.y + 50 &&
      player.y + player.size > monster.y
    ) {
      updateMessage("Colisión con monstruo");
      player.color = "red";
      endGame();
    }
  });
}

function checkWinCondition() {
  if (batteriesCollected >= 5 && monsters.length === 0) {
    gameOver = true;
    updateMessage("¡Has ganado! ¡Eliminaste a todos los monstruos!");
    createRestartButton();
  }
}

function endGame() {
  gameOver = true;
  updateMessage("¡Juego Terminado! Has perdido.");
  createRestartButton();
}

function updateMessage(message) {
  const gameMessages = document.getElementById("gameMessages");
  gameMessages.innerText = message;
}

// === Timer ===

function startTimer() {
  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    if (!gameOver) {
      gameTime++;
      drawEnvironment();
      updateMonsters();
    }
  }, 1000);
}

// Inicializa el juego
createStartButton();
