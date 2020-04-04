import React, { Component } from "react";
import * as THREE from "three";
import * as Physijs from "physijs-webpack/webpack";
import DragControls from "drag-controls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";
DragControls.install({ THREE: THREE });

export default class NewSetting extends Component {
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
    this.scene.setGravity(new THREE.Vector3(0, -30, 0));

    //camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // this.camera.position.x = 65;
    // this.camera.position.y = 56;
    // this.camera.position.z = 63;

    // this.camera.position.x = -0.00010644246678370728;
    // this.camera.position.y = -106.44247272582821;
    // this.camera.position.z = 1.571131251543668;
    //
    // this.camera.rotation.x = 1.5707963271298213;
    // this.camera.rotation.y = -9.999999442957265e-7;
    // this.camera.rotation.z = 1.571131251543668;

    this.camera.position.x = -35.52517559510762;
    this.camera.position.y = 16.403089136146598;
    this.camera.position.z = 99.00186371547744;

    this.camera.rotation.x = -0.16419304982148056;
    this.camera.rotation.y = -0.3402403272220028;
    this.camera.rotation.z = -0.055234988790575985;

    this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;

    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);

    //renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.mount.appendChild(this.renderer.domElement);
  };

  addObjects = () => {
    //cubemap
    var path = "./cubemap/";
    var jpg = ".jpg";
    var png = ".png";
    var urls = [
      path + "top" + png,
      path + "top" + png,
      path + "top" + png,
      path + "top" + png,
      path + "top" + png,
      path + "blue_1" + jpg
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

    var Ambientlight = new THREE.AmbientLight(0x404040);
    var Ambientlight2 = new THREE.AmbientLight(0x404040);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
    this.scene.add(Ambientlight);
    this.scene.add(Ambientlight2);

    //Ground Plane
    var groundPlane = new THREE.PlaneGeometry(1000, 1000, 20, 20);
    var groundMat = new THREE.MeshLambertMaterial({
      transparent: true,
      opacity: 0
    });

    var physMat = Physijs.createMaterial(groundMat);
    var physMesh = new Physijs.BoxMesh(groundPlane, physMat, 0);
    physMesh.position.y = 10;
    physMesh.rotation.x = -0.5 * Math.PI;
    this.scene.add(physMesh);

    //boxes
    const boxes = [];

    //////////////////// BIG BOX ON THE LEFT////////
    // const addLeftBox = () => {
    //   var leftBoxGeometry = new THREE.BoxGeometry(0.1, 70, 70);
    //   var leftBoxMaterial = new THREE.MeshLambertMaterial({
    //     envMap: reflectionCube,
    //     transparent: true,
    //     opacity: 0.7
    //   });
    //
    //   var leftBoxMaterial_final = Physijs.createMaterial(
    //     leftBoxMaterial,
    //     0.6,
    //     0.8
    //   );
    //
    //   var leftBox = new Physijs.BoxMesh(leftBoxGeometry, leftBoxMaterial, 10);
    //
    //   leftBox.position.x = -100;
    //   leftBox.position.y = 500;
    //   leftBox.position.z = 80;
    //
    //   leftBox.name = "box";
    //
    //   this.scene.add(leftBox);
    //
    //   boxes.push(leftBox);
    // };
    //
    // addLeftBox();

    //////////////////// box arriving from the front ////////
    // const addFrontBox = () => {
    //   var frontBoxGeometry = new THREE.BoxGeometry(0.1, 70, 70);
    //   var frontBoxMaterial = new THREE.MeshLambertMaterial({
    //     envMap: reflectionCube
    //   });
    //
    //   var frontBoxMaterial_final = Physijs.createMaterial(
    //     frontBoxMaterial,
    //     0.6,
    //     0.8
    //   );
    //
    //   var frontBox = new Physijs.BoxMesh(
    //     frontBoxGeometry,
    //     frontBoxMaterial_final,
    //     10
    //   );
    //
    //   frontBox.position.x = 44.33375549316406;
    //   frontBox.position.y = 12.050000190734863;
    //   frontBox.position.z = 10.24831485748291;
    //   frontBox.name = "box";
    //
    //   this.scene.add(frontBox);
    //   boxes.push(frontBox);
    // };
    //
    // addFrontBox();

    const addCube = () => {
      // create a cube and add to scene
      var cubeGeometry = new THREE.BoxGeometry(0.1, 7, 7);

      // new THREE.BoxGeometry(
      //   8 * Math.random() + 2,
      //   8 * Math.random() + 2,
      //   8 * Math.random() + 2
      // );

      //
      var cubeMaterial = new THREE.MeshLambertMaterial({
        //color: 0xffffff * Math.random()
        envMap: reflectionCube
      });
      cubeMaterial.transparent = true;
      var box_material = Physijs.createMaterial(cubeMaterial, 1.5, 1);

      var cube = new Physijs.BoxMesh(cubeGeometry, box_material, 10);

      cube.castShadow = true;
      //        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.name = "cube";

      cube.position.x = Math.random() * 10 - 5;
      cube.position.y = 100;
      cube.position.z = Math.random() * 10 - 5;

      cube.rotation.x = Math.random() * Math.PI * 2;
      cube.rotation.y = Math.random() * Math.PI * 2;
      cube.rotation.z = Math.random() * Math.PI * 2;

      this.scene.add(cube);
    };

    addCube();

    var count = 0;
    const interval = setInterval(addBoxLoad, 3000);
    function addBoxLoad() {
      count++;
      addCube();
      addCube();

      if (count === 20) {
        clearInterval(interval);
      }
    }

    window.addEventListener("click", () => {
      console.log(this.camera);
    });

    //initial planes
    // const addBox = () => {
    //   var cubeGeometry = new THREE.BoxGeometry(0.1, 7, 7);
    //   //envMap: reflectionCube,
    //
    //   var cubeMaterial = new THREE.MeshLambertMaterial({
    //     transparent: true,
    //     opacity: 0.9
    //   });
    //
    //   var box_material = Physijs.createMaterial(cubeMaterial, 0.6, 0.8);
    //
    //   var box = new Physijs.BoxMesh(cubeGeometry, box_material, 10);
    //
    //   box.name = "box";
    //   box.position.x = Math.random() * 10 - 5;
    //   box.position.y = 40;
    //   box.position.z = Math.random() * 10 - 5;
    //
    //   this.scene.add(box);
    //   boxes.push(box);
    // };
    //
    // // for (let i = 0; i < 10; i++) {
    // //   addBox();
    // // }
    //
    // // setTimeout(() => {
    // //   for (let i = 0; i < 10; i++) {
    // //     addBox();
    // //   }
    // // }, 3000);
    // //
    // // setTimeout(() => {
    // //   for (let i = 0; i < 10; i++) {
    // //     addBox();
    // //   }
    // // }, 3000);
    //
    // //////////////////////// cubeshapes with large friction and restitution ///////////
    //
    // const addCubeShape = () => {
    //   var CubeShapeGeometry = new THREE.BoxGeometry(0.1, 7, 7);
    //
    //   // new THREE.BoxGeometry(
    //   //   4 * Math.random() + 2,
    //   //   4 * Math.random() + 2,
    //   //   4 * Math.random() + 2
    //   // );
    //
    //   //envMap: reflectionCube
    //
    //   var CubeShapeMaterial = new THREE.MeshLambertMaterial({
    //     color: 0xd50e4d
    //   });
    //
    //   var CubeShapeMaterial_final = Physijs.createMaterial(
    //     CubeShapeMaterial,
    //     2,
    //     2
    //   );
    //
    //   var CubeShape = new Physijs.BoxMesh(
    //     CubeShapeGeometry,
    //     CubeShapeMaterial_final,
    //     10
    //   );
    //
    //   function getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min)) + min;
    //   }
    //
    //   CubeShape.name = "box";
    //
    //   CubeShape.position.x = Math.random() * 10 - 5;
    //   CubeShape.position.y = 40;
    //   CubeShape.position.z = Math.random() * 10 - 5;
    //
    //   this.scene.add(CubeShape);
    //   boxes.push(CubeShape);
    // };

    // addCubeShape();
    // addCubeShape();
    // addCubeShape();
    // addCubeShape();

    //ROTATION ON CLICK
    // for (let i = 0; i < this.scene.children.length; i++) {
    //   let boxes = this.scene.children[i];
    //
    //   if (boxes.name === "box") {
    //     document
    //       .querySelector("#boardCanvas2")
    //       .addEventListener("click", function(e) {
    //         boxes.rotation.set(0, 90, 8);
    //         boxes.__dirtyRotation = true;
    //       });
    //   }
    // }
  };

  animation = () => {
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.animation);
    this.scene.simulate();
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
      <div
        style={{ width: "100vw", height: "100vw" }}
        id="boardCanvas2"
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
