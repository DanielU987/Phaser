import './style.css'
import { MainScene } from './MainScene'
import { Box } from './Box'


var config = {
    type: Phaser.CANVAS,
    width:window.innerWidth,
    height:window.innerHeight,
    pixelArt:true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new MainScene()
};

var game = new Phaser.Game(config);

function preload ()
{

}

function create ()
{
    
}
/** @type HTMLCanvasElement */
/*
let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight
canvas.width = window.innerWidth

let ctx = canvas.getContext('2d');
let scene = new Scene(ctx)
scene.add(new Box(canvas.width / 2, canvas.height / 2, 100, 100, 50));
let previous, current = 0
let start = new Date().getTime();

setInterval(() => {
    previous = current
    current = new Date().getTime() - start;
    let delta = current - previous
    scene.beforeUpdate();
    scene.update(delta);
    scene.draw()

}, 0)*/