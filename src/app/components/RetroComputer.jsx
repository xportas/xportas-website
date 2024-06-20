'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



export default function RetroComputer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(2, 2.5, 5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 10;
    controls.maxDistance = 90;
    controls.minPolarAngle = 1;
    controls.maxPolarAngle = 1.3;

    const currentAzimuthAngle = controls.getAzimuthalAngle();
    const rotationRange = Math.PI / 10;
    controls.minAzimuthAngle = currentAzimuthAngle - rotationRange;
    controls.maxAzimuthAngle = currentAzimuthAngle + rotationRange / 2;

    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 4, 0);
    controls.update();

    const spotLight = new THREE.SpotLight(0xffffff, 3000, 0, 1, 2);
    spotLight.position.set(10, 15, 15);
    spotLight.castShadow = true;
    scene.add(spotLight);

    const loader = new GLTFLoader().setPath('models/commodore/');
    loader.load(
      'scene.gltf',
      (gltf) => {
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        mesh.position.set(0, 2.05, 0);
        // mesh.rotation.y = THREE.MathUtils.degToRad(15);
        scene.add(mesh);
      },
      (error) => {
        console.error(error);
      }
    );

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    mountRef.current.appendChild(renderer.domElement);
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div>
      <div ref={mountRef}></div>
    </div>
  );
};