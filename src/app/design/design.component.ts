import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


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
  private controls!: OrbitControls;
  private autoRotate = true;
  private autoRotateTimeoutId: number | null = null;

  constructor() { }

  ngAfterViewInit() {
    this.initScene();;
    this.loadModel();
    this.animate();
  }

  private initScene() {
    // Selection de la scène et création
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.scene = new THREE.Scene();
    // Réglage taille scène
    this.camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    this.camera.position.z = 100;
    // Réglage caméra
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // Réglage éclairage model
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
    // Réglage rotation manuel
    this.controls.addEventListener('start', this.handleControlsStart.bind(this));
    this.controls.addEventListener('end', this.handleControlsEnd.bind(this));

    window.addEventListener('resize', this.handleResize.bind(this));
    this.handleResize();
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  }

  private loadModel() {
    objLoader.load('assets/model.obj', (object: THREE.Object3D) => {
      this.model = object;
      this.scene.add(this.model);
    });
  }

  private handleControlsStart() {
    this.autoRotate = false;
  }

  private handleControlsEnd() {
    this.autoRotateTimeoutId = setTimeout(() => {
      this.autoRotate = true;
    }, 30000);
  }

  private animate() {
    const animateFrame = () => {
      requestAnimationFrame(animateFrame);

      if (this.autoRotate) {
        this.model.rotation.x += 0.01;
        this.model.rotation.y += 0.01;
      }

      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    animateFrame();
  }

  private handleResize() {
    const canvas = this.canvasRef.nativeElement;
    this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.autoRotateTimeoutId !== null) {
      clearTimeout(this.autoRotateTimeoutId);
    }
  }
}
