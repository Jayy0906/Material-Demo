import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js' ;

import * as THREE from "three";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";

import Experience from "../Experience";

export default class World {
  constructor() {
    this.timeStep = 1 / 60;
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.setenv();
    this.initcode();
  }

  setenv() {
    const loader = new RGBELoader() ; 
        loader.load('H.hdr' , (elem)=>{
            elem.mapping = THREE.EquirectangularReflectionMapping ; 
            this.scene.environment = elem ; 
        })
  }

  initcode() {
    // console.log(this.resources)
    this.scene.add(this.experience.resources.items.room.scene);
    // this.scene.add(this.experience.resources.items.floor_lamp.scene);
    this.scene.add(this.experience.resources.items.frames.scene);
    this.scene.add(this.experience.resources.items.leather_sofa.scene);
    this.scene.add(this.experience.resources.items.table.scene);
    this.scene.add(this.experience.resources.items.carpet.scene);
  }
  update() {}
}
