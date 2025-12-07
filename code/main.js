import { Game } from "./src/game.js";

const tg = window.Telegram.WebApp;
tg.expand();

const canvas = document.getElementById("game");
const game = new Game(canvas);
game.start();