import React, { Component } from "react";
import * as THREE from "three";
import * as Ammo from "ammo.js";
import * as Physijs from "physijs-webpack/webpack";
import DragControls from "drag-controls";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";
DragControls.install({ THREE: THREE });

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
  }
  componentDidMount() {
    // global variables

    //Physijs.scripts.worker = "physijs_worker.js";

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    this.scene = new Physijs.Scene();
    this.scene.setGravity(new THREE.Vector3(0, -30, 0));

    // create a camera, which defines where we're looking at.
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // position and point the camera to the center of the scene
    this.camera.position.x = 65;
    this.camera.position.y = 56;
    this.camera.position.z = 63;
    this.camera.lookAt(this.scene.position);

    // create a render, sets the background color and the size

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    this.renderer.setClearColor(0x000000, 0);

    var dirLight = new THREE.DirectionalLight();
    dirLight.position.set(25, 23, 15);
    this.scene.add(dirLight);

    var dirLight2 = new THREE.DirectionalLight();
    dirLight2.position.set(-25, 23, 15);
    this.scene.add(dirLight2);

    var spotLight = new THREE.SpotLight();
    spotLight.intensity = 0.1;
    spotLight.position.set(30, 60, 60);
    this.scene.add(spotLight);
    spotLight.castShadow = true;
    spotLight.shadow.camera.fov = 60;
    spotLight.shadow.camera.far = 250;
    spotLight.shadowCameraFNear = 50;

    var groundPlane = new THREE.PlaneGeometry(1000, 1000, 20, 20);
    var groundMat = new THREE.MeshLambertMaterial({
      color: 0xffffff
    });

    var physMat = Physijs.createMaterial(groundMat);
    var physMesh = new Physijs.BoxMesh(groundPlane, physMat, 0);
    physMesh.rotation.x = -0.5 * Math.PI;
    physMesh.receiveShadow = true;

    this.scene.add(physMesh);

    // add the output of the renderer to the html element
    this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
    this.camera.updateProjectionMatrix();

    this.addCube = () => {
      // create a cube and add to scene
      var cubeGeometry = new THREE.BoxGeometry(
        4 * Math.random() + 2,
        4 * Math.random() + 2,
        4 * Math.random() + 2
      );
      var cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff * Math.random()
      });
      cubeMaterial.transparent = true;
      var box_material = Physijs.createMaterial(cubeMaterial, 0.6, 0.3);
      //var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

      var cube = new Physijs.BoxMesh(cubeGeometry, box_material, 10);

      cube.castShadow = true;

      cube.name = "cube";

      cube.position.x = Math.random() * 10 - 5;
      cube.position.y = 40;
      cube.position.z = Math.random() * 10 - 5;

      this.scene.add(cube);

      console.log(this.scene);
    };

    this.addCube();
    this.addCube();
    this.addCube();
    this.addCube();

    //console.log("addCube", addCube);

    window.addEventListener("click", this.addCube);

    this.renderer.render(this.scene, this.camera);

    this.mount.appendChild(this.renderer.domElement);

    requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    this.mount.removeChild(this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <div className="wrapper">
        <div
          style={{ width: "100vw", height: "100vw" }}
          id="boardCanvas"
          ref={mount => {
            this.mount = mount;
          }}
        />
      </div>
    );
  }
}
