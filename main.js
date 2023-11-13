import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; 
import Experience from './Experience/Experience.js';

const experience = new Experience(document.querySelector(".experience-canvas") );

const canvasContainer = document.getElementById("canvas-container");
const loadModelButton = document.getElementById("loadModelButton");

const scene = experience.scene;

const world = new World();

if (loadModelButton) {
    loadModelButton.addEventListener("click", () => {
    const glbFilePath = 'D:/1/SpeedStarterThree/public/Loung_Chair.glb'; // Replace with the actual path to your GLB model.
    
    const loader = new GLTFLoader();

    // Load the GLB file defined in the code
    loader.load(glbFilePath, (gltf) => {
        const model = gltf.scene;
        scene.add(model);
    });
})};