import React, { Component } from "react";
import * as THREE from "three";
//import * as Ammo from "ammo.js";
import * as Physijs from "physijs-webpack/webpack";
import DragControls from "drag-controls";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";
DragControls.install({ THREE: THREE });

export default class PlaygroundDrafty extends Component {
  componentDidMount() {
    this.setUp();
    this.addObjects();
    this.animation();
    this.updateDimensions();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
  }

  setUp = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    //scene
    this.scene = new Physijs.Scene();
    //this.scene.setGravity(new THREE.Vector3(0, -10, 0));

    //camera
    this.camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    this.camera.position.set(
      10.50606167271692,
      -83.64728895415534,
      9.630873208028522
    );

    this.camera.rotation.x = 1.456164381734687;
    this.camera.rotation.y = -20;
    this.camera.rotation.z = -0.8217009061000422;

    this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;

    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);

    //renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      transparent: true
    });

    //this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mount.appendChild(this.renderer.domElement);
  };

  addObjects = () => {
    //cubemap
    var path = "./castle/";
    var format = ".jpg";
    var png = ".png";
    var urls = [
      path + "blue_1" + format,
      path + "top2" + png,
      path + "blue_4" + format,
      path + "top" + png,
      path + "blue_3" + format,
      path + "blue_2" + format
    ];

    var reflectionCube = new THREE.CubeTextureLoader().load(urls);
    var refractionCube = new THREE.CubeTextureLoader().load(urls);
    refractionCube.mapping = THREE.CubeRefractionMapping;

    this.scene.background = reflectionCube;

    //controls
    const controls = new OrbitControls(this.camera, this.mount);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    //lights
    var lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    var Ambientlight = new THREE.AmbientLight(0x404040); // soft white light

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    this.scene.add(Ambientlight);

    //Ground Plane
    var groundPlane = new THREE.PlaneGeometry(1000, 1000, 20, 20);
    var groundMat = new THREE.MeshLambertMaterial({
      color: 0x0000,
      transparent: true,
      opacity: 0
    });

    var physMat = Physijs.createMaterial(groundMat);
    var physMesh = new Physijs.BoxMesh(groundPlane, physMat, 0);
    physMesh.position.y = 12;
    physMesh.rotation.x = -0.5 * Math.PI;
    this.scene.add(physMesh);

    //boxes
    const boxes = [];

    //addBox function
    const addBox = () => {
      var cubeGeometry = new THREE.BoxGeometry(0.1, 7, 7);
      // var cubeGeometry = new THREE.BoxGeometry(
      //   4 * Math.random() + 2,
      //   4 * Math.random() + 2,
      //   4 * Math.random() + 2
      // );

      ///var texturePlane = new THREE.TextureLoader().load("marble.png");
      var cubeMaterial = new THREE.MeshLambertMaterial({
        envMap: reflectionCube,
        transparent: true,
        opacity: 0.7
      });

      var box_material = Physijs.createMaterial(cubeMaterial, 0.6, 0.8);

      var box = new Physijs.BoxMesh(cubeGeometry, box_material, 10);

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

      box.name = "box";
      box.position.x = getRandomInt(0, 20);
      box.position.y = getRandomInt(12, 70);
      box.position.z = Math.random() * 10 - 5;

      // box.position.x = getRandomInt(5, 10);
      // box.position.y = getRandomInt(12, 70);
      // box.position.z = Math.random() * 10 - 5;

      //;

      // console.log("box", box);
      // console.log("box.position.x", box.position.x);
      // console.log("box.position.y", box.position.y);
      // console.log("box.position.z", box.position.z);

      this.scene.add(box);
      boxes.push(box);
    };

    //add 30 initial boxes
    for (let i = 0; i < 8; i++) {
      addBox();
    }

    var dragControls = new DragControls(
      boxes,
      this.camera,
      this.renderer.domElement
    );

    //drag controls
    dragControls.addEventListener("dragstart", function(e) {
      //console.log(dragControls);
      console.log("e.object", e.object);
      console.log("e.object.rotation", e.object.rotation);
      console.log("e.object.position", e.object.position);
      console.log("e.object.rotation", e.object.rotation);
      //e.object.rotation.x = 0.015;

      controls.enabled = false;
    });

    dragControls.addEventListener("dragend", function(e) {
      console.log("e.object.position", e.object.position);
      //e.object.rotation.y = 0.005;
      e.object.__dirtyPosition = true;

      controls.enabled = true;
    });

    const planes = [];

    const addPlane = () => {
      new THREE.BoxGeometry(0.1, 7, 7);

      var planeGeometry = new THREE.BoxGeometry(
        4 * Math.random() + 2,
        4 * Math.random() + 2,
        4 * Math.random() + 2
      );

      var planeMaterial = new THREE.MeshLambertMaterial({
        envMap: reflectionCube
      });

      var plane_material_final = Physijs.createMaterial(
        planeMaterial,
        0.6,
        0.8
      );

      var plane = new Physijs.BoxMesh(planeGeometry, plane_material_final, 10);

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

      plane.name = "plane";
      // plane.position.x = 26.43;
      // plane.position.y = 12;
      // plane.position.z = Math.random() * 10 - 5;

      plane.position.x = getRandomInt(0, 20);
      plane.position.y = getRandomInt(12, 70);
      plane.position.z = Math.random() * 10 - 5;

      //;

      // console.log("box", box);
      // console.log("box.position.x", box.position.x);
      // console.log("box.position.y", box.position.y);
      // console.log("box.position.z", box.position.z);

      this.scene.add(plane);
      planes.push(plane);
    };

    //add 30 initial boxes
    for (let i = 0; i < 10; i++) {
      addPlane();
    }

    //add 100 boxes
    // var count = 0;
    // const interval = setInterval(addBoxLoad, 500);
    // function addBoxLoad() {
    //   count++;
    //   addBox();
    //
    //   if (count === 10) {
    //     clearInterval(interval);
    //   }
    // }
  };

  animation = () => {
    this.scene.simulate();
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.animation);
  };

  handleWindowResize = () => {
    if (this.mount !== null) {
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;

      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;

      this.camera.updateProjectionMatrix();
    }
  };

  updateDimensions = () => {
    if (this.mount !== null) {
      this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
      this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.render(this.scene, this.camera);
    }
  };

  render() {
    return (
      <div className="wrapper-playgd">
        <div
          style={{ width: "100vw", height: "100vw" }}
          id="boardCanvas2"
          ref={mount => {
            this.mount = mount;
          }}
        />
      </div>
    );
  }
}
