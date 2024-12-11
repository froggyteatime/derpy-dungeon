import Phaser from "phaser";
import { IMAGES, SCENE } from "../constants";

export class level01 extends Phaser.Scene {
    constructor() {
        super({key: SCENE.level01});

    }

    preload(){
        this.load.tilemapTiledJSON("level-01","/tilemaps/level-01.json");
    }

    create(){
  
        const map = this.make.tilemap({
            key:"level-01",
            tileHeight:16,
            tileWidth:16,
        });

        const floorTiles = map.addTilesetImage("floors",IMAGES.floor);
        const floorLayer = map.createLayer("floor",floorTiles);
        const wallTiles = map.addTilesetImage("low walls",IMAGES.walls);
        const wallLayer = map.createLayer("wall",wallTiles);
        const decorTiles = map.addTilesetImage("high walls",IMAGES.decor);
        const decorLayer = map.createLayer("decor",decorTiles);

       //this.player = new Player(this,50,50)
       this.cameras.main.zoom = 3;
       //this.cameras.main.startFollow(this.player);
    }

    update(){
        //this.player.update();
    }
}