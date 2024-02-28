import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';


const objLoader = new OBJLoader();

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private model!: THREE.Object3D;


  constructor() { }

  ngAfterViewInit() {
    this.initScene();;
    this.loadModel();
    this.animate();
  }

  private initScene() {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    this.camera.position.z = 5;
  }

  private loadModel() {
    objLoader.load('assets/model.obj', (object: THREE.Object3D) => {
      this.model = object;
      this.scene.add(this.model);
    });
  }

  private animate() {
    const animateFrame = () => {
      requestAnimationFrame(animateFrame);
      this.model.rotation.x += 0.01;
      this.model.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    };
    animateFrame();
  }
}
