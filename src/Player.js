import Phaser from "phaser";
export class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y) {
        super(scene,x,y,'player');
        this.setTexture('atlas', 'chest_empty_open_anim');
        this.setScale(4);
        ley key[
        let keyA= this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.A)
        let keyD= this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.D)
        let keyW= this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.W)
        let keyS= this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.S)
        ]
    }


    update(){
        
    }
}