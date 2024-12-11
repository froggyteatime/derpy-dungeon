import Phaser from "phaser";
import { IMAGES, SCENE } from "../constants";

export class Preloader extends Phaser.Scene{
    constructor(){
        super({key:SCENE.preloader});
    }

    preload(){
        this.load.image(IMAGES.floor,"/tilemaps/atlas_floor-16x16.png");
        this.load.image(IMAGES.walls,"/tilemaps/atlas_walls_low-16x16.png");
        this.load.image(IMAGES.decor,"/tilemaps/atlas_walls_high-16x32.png");
    }

    create(){
        this.scene.start(SCENE.level01)
    }
}