import React, { Component } from "react";
import * as THREE from "three";
import "./App.css";

export default class Shape extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);

    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

    // scene
    this.scene = new THREE.Scene();

    // camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    );
    this.camera.position.z = 30;
    this.camera.lookAt(this.scene.position);

    // rendering
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    this.renderer.setClearColor(0x000000, 0);

    this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.render(this.scene, this.camera);

    this.mount.appendChild(this.renderer.domElement);

    // sphere
    const particleMat = new THREE.PointsMaterial({
      color: 0xaecdd0,
      size: 0.1,
      map: new THREE.TextureLoader().load("/particle2.jpg"),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleGeo = new THREE.SphereGeometry(15, 300, 300);

    particleGeo.vertices.forEach(function(vertex) {
      vertex.x += Math.random() - 0.2;
      vertex.y += Math.random() - 0.2;
      vertex.z += Math.random() - 0.2;
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    particleSystem.name = "particleSystem";

    this.scene.add(particleSystem);

    var lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    this.renderer.render(this.scene, this.camera);

    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    this.mount.removeChild(this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(this.animate);
    const particleSystem = this.scene.getObjectByName("particleSystem");
    particleSystem.rotation.y += 0.005;
    this.renderer.render(this.scene, this.camera);
  }

  updateDimensions() {
    if (this.mount !== null) {
      this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
      this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.render(this.scene, this.camera);
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div
          style={{ width: "100vw", height: "50vw" }}
          id="boardCanvas"
          ref={mount => {
            this.mount = mount;
          }}
        />
      </div>
    );
  }
}
