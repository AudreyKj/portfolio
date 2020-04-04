import React, { Component } from "react";
import * as THREE from "three";
//import * as Ammo from "ammo.js";
//import * as Physijs from "physijs-webpack/webpack";
import DragControls from "drag-controls";

//import Reflector from "three-reflector";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";
DragControls.install({ THREE: THREE });

export default class PlaygroundHome extends Component {
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

    // scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 80;

    // this.camera = new THREE.PerspectiveCamera(
    //   35,
    //   window.innerWidth / window.innerHeight,
    //   1,
    //   1000
    // );
    //
    // this.camera.position.set(
    //   10.50606167271692,
    //   -83.64728895415534,
    //   9.630873208028522
    // );
    //
    // this.camera.rotation.x = 1.456164381734687;
    // this.camera.rotation.y = -20;
    // this.camera.rotation.z = -0.8217009061000422;

    // this.camera = new THREE.PerspectiveCamera(
    //   50,
    //   window.innerWidth / window.innerHeight,
    //   1,
    //   5000
    // );
    // this.camera.position.z = 80;

    // this.scene.position.set(
    //   10.50606167271692,
    //   -83.64728895415534,
    //   9.630873208028522
    // );
    //
    // this.scene.rotation.x = 1.456164381734687;
    // this.scene.rotation.y = -20;
    // this.scene.rotation.z = -0.8217009061000422;
    //
    // this.camera = new THREE.PerspectiveCamera(
    //   50,
    //   window.innerWidth / window.innerHeight,
    //   1,
    //   5000
    // );

    // this.camera = new THREE.PerspectiveCamera(
    //   35,
    //   window.innerWidth / window.innerHeight,
    //   1,
    //   1000
    // );
    // //this.camera.position.z = 2000;
    //
    // //

    this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;

    this.camera.lookAt(this.scene.position);

    //renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      transparent: true
    });

    this.renderer.setClearColor(0x000000, 0);
    // this.renderer.autoClearColor = false;

    //this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mount.appendChild(this.renderer.domElement);
  };

  addObjects = () => {
    //cubemap
    //cubemap
    var path = "./castle/";
    var format = ".jpg";
    var png = ".png";
    var urls = [
      path + "blue_1" + format,
      path + "blue_4" + format,
      path + "top2" + png,
      path + "top" + png,
      path + "blue_3" + format,
      path + "blue_2" + format
    ];

    // var path = "./castle/";
    // var format = ".jpg";
    // var png = ".png";
    // var urls = [
    //   path + "blue_1" + format,
    //   path + "blue_4" + format,
    //   path + "blue_3" + format,
    //   path + "blue_2" + format,
    //   path + "top2" + png,
    //   path + "top" + png
    // ];

    var reflectionCube = new THREE.CubeTextureLoader().load(urls);
    var refractionCube = new THREE.CubeTextureLoader().load(urls);
    refractionCube.mapping = THREE.CubeRefractionMapping;

    this.scene.background = reflectionCube;

    console.log("this.scene.background", this.scene.background);

    //controls
    const controls = new OrbitControls(this.camera, this.mount);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;

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

    //ground
    // var groundPlane = new THREE.PlaneGeometry(1000, 1000, 20, 20);
    // var groundMat = new THREE.MeshLambertMaterial({
    //   color: 0x0000,
    //   transparent: true,
    //   opacity: 0
    // });
    //
    // var ground = new THREE.Mesh(groundPlane, groundMat);
    // ground.name = "ground";
    // ground.position.y = 12;
    // ground.rotation.x = -0.5 * Math.PI;
    // this.scene.add(ground);

    //rain
    // var particleCount = 14000;
    // var pMaterial = new THREE.PointsMaterial({
    //   color: 0xffffff,
    //   size: 0.8,
    //   map: new THREE.TextureLoader().load("/raindrop.png"),
    //   transparent: true,
    //   blending: THREE.AdditiveBlending,
    //   depthWrite: false
    // });
    //
    // var particles = new THREE.Geometry();
    // particles.name = "particles";
    //
    // particles = new THREE.Geometry();
    // var pX = Math.random() * 500 - 250;
    // var pY = Math.random() * 500 - 250;
    // var pZ = Math.random() * 500 - 250;
    //
    // var particle = new THREE.Vector3(pX, pY, pZ);
    //
    // for (var i = 0; i < particleCount; i++) {
    //   particle.velocity = {};
    //   particle.velocity.y = 0;
    //   particles.vertices.push(particle);
    // }
    //
    // console.log("particles.vertices", particles.vertices);
    // const rain = new THREE.Points(particles, pMaterial);
    //
    // rain.sizeAttenuation = true;
    // rain.sortPoints = true;
    // rain.name = "rain";
    //
    // rain.position.x = 0;
    // rain.position.y = 0;
    // rain.position.z = 0;
    // console.log("rain", rain);
    //
    // this.scene.add(rain);

    //////////BOXES ////////

    const boxes = [];

    const textureMarble = new THREE.TextureLoader().load("/marble.png");

    ////BOX 1
    // var cubeGeometry = new THREE.BoxGeometry(0.1, 7, 7);
    //
    // var texturePlane = new THREE.TextureLoader().load("marble.png");
    // var cubeMaterial = new THREE.MeshLambertMaterial({
    //   map: texturePlane,
    //   transparent: true,
    //   opacity: 0.7
    // });
    //
    // var box1 = new THREE.Mesh(cubeGeometry, cubeMaterial);
    //
    // box1.name = "box1";
    // box1.position.x = 3.7268981452747934;
    // box1.position.y = 10.612088786293992;
    // box1.position.z = 18.430456100850733;
    //
    // box1.rotation.x = Math.random() * Math.PI * 2;
    // box1.rotation.y = Math.random() * Math.PI * 2;
    // box1.rotation.z = Math.random() * Math.PI * 2;
    //
    // //this.scene.add(box1);
    // boxes.push(box1);

    //box 2
    // var Box2Geometry = new THREE.BoxGeometry(0.1, 7, 7);
    //
    // var Box2Material = new THREE.MeshLambertMaterial({
    //   envMap: reflectionCube,
    //   combine: THREE.MixOperation,
    //   reflectivity: 0.3,
    //   transparent: true,
    //   opacity: 0.7
    // });
    //
    // var box2 = new Reflector(Box2Geometry, {
    //   clipBias: 0.003,
    //   textureWidth: window.innerWidth * window.devicePixelRatio,
    //   textureHeight: window.innerHeight * window.devicePixelRatio,
    //   color: 0x777777,
    //   recursion: 1
    // });
    //
    // box2.position.x = -900;
    // box2.position.y = 50;
    // box2.position.x = 0;
    // box2.position.y = 0;
    // box2.position.z = 0;

    // box2.position.x = 9.498094253777658;
    // box2.position.y = 10.705859676588961;
    // box2.position.z = 9.156229995978544;
    //
    // box2.rotation.x = 5.775707822270445;
    // box2.rotation.y = 2.6276875522977985;
    // box2.rotation.z = 9.238997890924791;
    //
    // this.scene.add(box2);
    // boxes.push(box2);

    ///mirror_
    var geometry = new THREE.BoxBufferGeometry(0.1, 7, 7);
    var groundMirror = new Reflector(geometry, {
      clipBias: 0.003,
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
      color: 0x777777,
      recursion: 1
    });

    groundMirror.position.x = -12.601753250831074;
    groundMirror.position.y = 17.496696615322982;
    groundMirror.position.z = 12.14647088050621;

    groundMirror.rotation.x = 3.050794684844078;
    groundMirror.rotation.y = 3.244651312405567;
    groundMirror.rotation.z = 2.881050024898358;
    console.log("groundMirror", groundMirror);
    groundMirror.name = "groundMirror";
    boxes.push(groundMirror);
    this.scene.add(groundMirror);

    ////BOX 3
    // var Box3Geometry = new THREE.BoxBufferGeometry(0.1, 7, 7);
    //
    // //
    // // var box3Material = new THREE.MeshLambertMaterial({
    // //   map: textureMarble,
    // //   transparent: true,
    // //   opacity: 0.7
    // // });
    //
    // var box3Material = new Reflector(Box3Geometry, {
    //   clipBias: 0.006,
    //   textureWidth: window.innerWidth * window.devicePixelRatio,
    //   textureHeight: window.innerHeight * window.devicePixelRatio,
    //   color: 0x777777,
    //   recursion: 1
    // });
    //
    // var box3 = new THREE.Mesh(Box3Geometry, box3Material);
    //
    // box3.name = "box3";
    // box3.position.x = 12.974414793690002;
    // box3.position.y = 12.311150516949297;
    // box3.position.z = 12.14647088050621;
    //
    // box3.rotation.x = 3.050794684844078;
    // box3.rotation.y = 3.244651312405567;
    // box3.rotation.z = 2.881050024898358;
    //
    // this.scene.add(box3);
    // boxes.push(box3);

    //point to the photos
    //two ways, you can also use the THREE.UVMapping to load a single 360 degrees

    // var urls = [
    //   "blue_1.jpg",
    //   "blue_2.jpg",
    //   "top.png",
    //   "top-copy-2.png",
    //   "blue_3.jpg",
    //   "blue_4.jpg"
    // ];
    //
    // var cubemap = THREE.ImageUtils.loadTextureCube(urls);
    // //var cubemap = THREE.ImageUtils.loadTextureCube(
    // //   urls,
    // //   new THREE.CubeRefractionMapping()
    // // );
    // //cubematerial.material.transparent = true;
    // cubemap.format = THREE.RGBFormat;
    //
    // this.scene.background = cubemap;
    //
    // // create a custom shader
    // var shader = THREE.ShaderLib["cube"];
    // console.log(shader);
    // shader.uniforms["envMap"].value = cubemap;
    //
    // var Rmaterial = new THREE.ShaderMaterial({
    //   fragmentShader: shader.fragmentShader,
    //   vertexShader: shader.vertexShader,
    //   uniforms: shader.uniforms,
    //   depthWrite: false,
    //   side: THREE.DoubleSide
    // });
    //
    // // create the skybox
    // var skybox = new THREE.Mesh(
    //   new THREE.BoxGeometry(10000, 10000, 10000),
    //   Rmaterial
    // );
    // this.scene.add(skybox);

    ////BOX 4

    var Box4Geometry = new THREE.BoxBufferGeometry(0.1, 7, 7);
    var Box4Material = new THREE.MeshLambertMaterial({
      envMap: reflectionCube
    });

    var box4 = new THREE.Mesh(Box4Geometry, Box4Material);
    box4.name = "box4";

    // box4.position.x = 0.9277412118653249;
    // box4.position.y = 23.457678947420472;
    // box4.position.z = 18.589765132410495;

    box4.position.x = 4.586793681757798;
    box4.position.y = 19.639537239706584;
    box4.position.z = 18.589765132410502;

    box4.rotation.x = 4.508886738220743;
    box4.rotation.y = 6.1801244428683635;
    box4.rotation.z = 1.9416122237315958;

    this.scene.add(box4);
    boxes.push(box4);

    //////////////////////////:

    // const addShape = (x, y) => {
    //   var newBoxGeometry = new THREE.BoxGeometry(0.1, 7, 7);
    //
    //   var newBoxMaterial = new THREE.MeshLambertMaterial({
    //     map: textureMarble,
    //     transparent: true,
    //     opacity: 0.7
    //   });
    //
    //   var newMesh = new THREE.Mesh(newBoxGeometry, newBoxMaterial);
    //
    //   newMesh.position.x = window.innerWidth / 2 - x;
    //   newMesh.position.y = window.innerHeight / 2 - y;
    //
    //   boxes.push(newMesh);
    //   this.scene.add(newMesh);
    // };
    //
    // document.addEventListener("click", function(event) {
    //   addShape(event.pageX, event.pageY);
    // });

    /////////////////////////////

    ///BOX 5
    var Box5Geometry = new THREE.BoxGeometry(0.1, 7, 7);

    var Box5Material = new THREE.MeshLambertMaterial({
      map: textureMarble,
      transparent: true,
      opacity: 0.7
    });

    var box5 = new THREE.Mesh(Box5Geometry, Box5Material);

    box5.name = "box5";

    box5.position.x = -14.890893135457139;
    box5.position.y = 16.48411351516873;
    box5.position.z = 22.587219984959646;

    box5.rotation.x = 6.164117625454849;
    box5.rotation.y = 3.3481666309639824;
    box5.rotation.z = 3.1613883095519517;

    console.log("box.position.x", box5.position.x);
    console.log("box.position.y", box5.position.y);
    console.log("box.position.z", box5.position.z);

    this.scene.add(box5);
    boxes.push(box5);

    //BOX 6
    var Box6Geometry = new THREE.BoxGeometry(0.1, 7, 7);

    var Box6Material = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      shininess: 100,
      transparent: true,
      opacity: 0.7
    });

    var box6 = new THREE.Mesh(Box6Geometry, Box6Material);

    box6.name = "box6";

    box6.position.x = -16.514409013466448;
    box6.position.y = 23.38315291029844;
    box6.position.z = 14.514363212231638;

    box6.rotation.x = 4.838744293611346;
    box6.rotation.y = 1.6472562243647586;
    box6.rotation.z = 3.0263014065077685;

    console.log("box.position.x", box6.position.x);
    console.log("box.position.y", box6.position.y);
    console.log("box.position.z", box6.position.z);

    this.scene.add(box6);
    boxes.push(box6);

    ///BOX 7
    var Box7Geometry = new THREE.BoxGeometry(0.1, 7, 7);

    var Box7Material = new THREE.MeshLambertMaterial({
      envMap: reflectionCube
    });

    var box7 = new THREE.Mesh(Box7Geometry, Box7Material);

    box7.name = "box7";

    box7.position.x = -6.689043147591237;
    box7.position.y = 22.346634928439414;
    box7.position.z = 5.891281726999269;

    box7.rotation.x = 0;
    box7.rotation.y = 0;
    box7.rotation.z = 0;

    this.scene.add(box7);
    boxes.push(box7);

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
      console.log("e.object.rotation", e.object.rotation);
      //console.log("e.object.position", e.object.position);
      //e.object.rotation.y = 0.005;
      // e.object.__dirtyPosition = true;

      controls.enabled = true;
    });

    var particleCount = 1000000;
    var pMaterial = new THREE.PointCloudMaterial({
      color: 0xffffff,
      size: 0.2,
      map: new THREE.TextureLoader().load("raindrop.png"),
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      opacity: 0.3
    });

    var particles = new THREE.Geometry();
    for (var i = 0; i < particleCount; i++) {
      var pX = Math.random() * 500 - 250,
        pY = Math.random() * 500 - 250,
        pZ = Math.random() * 500 - 250,
        particle = new THREE.Vector3(pX, pY, pZ);
      particle.velocity = {};
      particle.velocity.y = 0;
      particles.vertices.push(particle);
    }
    var particleSystem = new THREE.PointCloud(particles, pMaterial);
    this.scene.add(particleSystem);

    console.log("this.scene", this.scene);
  };

  simulateRain = () => {
    var pCount = 1000000;
    var particles = this.scene.children[9].geometry;

    while (pCount--) {
      var particle = particles.vertices[pCount];
      if (particle.y < -500) {
        particle.y = 500;
        particle.velocity.y = 0;
      }
      particle.velocity.y -= Math.random() * 0.003;
      particle.y += particle.velocity.y;
    }
    particles.verticesNeedUpdate = true;
  };

  animation = () => {
    // const groundMirror = this.scene.getObjectByName("groundMirror");
    // groundMirror.rotation.y += -0.0025;
    // groundMirror.rotation.x += -0.0025;
    // groundMirror.rotation.z += -0.0025;

    // groundMirror.rotation.y += 0.0025;
    // groundMirror.rotation.x += 0.0025;
    //var time;

    // groundMirror.rotation.y += 0.001;
    //
    //
    // const groundMirror = this.scene.getObjectByName("groundMirror");
    // groundMirror.rotation.z += 0.003;
    //groundMirror.rotation.y -= 0.001;

    //groundMirror.position.y = 180 + Math.sin(time / 1000) * 20;

    //

    // box7.rotation.x += -0.001;
    // box7.rotation.z += -0.001;
    this.simulateRain();
    this.requestID = window.requestAnimationFrame(this.animation);

    this.renderer.render(this.scene, this.camera);
  };

  handleWindowResize = () => {
    if (this.mount !== null) {
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;

      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;

      // Note that after making changes to most of camera properties you have to call
      // .updateProjectionMatrix for the changes to take effect.
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
