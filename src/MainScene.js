import { Scene } from "phaser";
import atlasJSON from '../tiles.json'
import atlas from './assets/0x72_DungeonTilesetII_v1.4.png'
import mapJSON from './assets/MYmap.json'
import { Player } from "./Player";
export class MainScene extends Scene {
    preload(){
        
        this.load.atlas('atlas', atlas, atlasJSON);
        this.load.tilemapTiledJSON('map', mapJSON);
    }
    create(){
        
        const map =  this.make.tilemap({key:'map'})

        const tiles = map.addTilesetImage("Dungeon", "atlas");

        const layer = map.createLayer(0,tiles, 0,0);
        layer.setScale(4);
        let player = this.add.existing(new Player(this,100,100))
        this.physics.add.existing(player)
        const layer2 = map.createLayer(1,tiles, 0,0);
        layer2.setScale(4);
        // Set collision with player (can also be a group)
        layer2.setCollisionByExclusion([-1]);
        this.physics.add.collider(player, layer2);
    }
}