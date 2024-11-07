'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function RetroComputer({ setHiddenRetroComputer, scrollFactor }) {
  const mountRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(1, 2.5, 5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 10;
    controls.maxDistance = 90;
    controls.minPolarAngle = 1.23;
    controls.maxPolarAngle = 1.32;

    const currentAzimuthAngle = controls.getAzimuthalAngle();
    const rotationRange = Math.PI / 10;
    controls.minAzimuthAngle = currentAzimuthAngle - rotationRange / 2;
    controls.maxAzimuthAngle = currentAzimuthAngle + rotationRange / 4;

    controls.rotateSpeed = 0.1;

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
        scene.add(mesh);
      },
      // (error) => {
      //   console.error(error);
      // }
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

    // When the maximum zoom is raised, the focus is removed from the model and returned to the page
    function handleMouseWheel(event) {
      if (camera.position.length() >= controls.maxDistance) {
        event.preventDefault();
        window.scrollBy(0, event.deltaY);
        setHiddenRetroComputer(true);
      }
    }

    renderer.domElement.addEventListener('wheel', handleMouseWheel);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);

  return (
    <div
      className={"fixed top-0 left-0 transition-all duration-300 ease-out"}
      style={{
        opacity: 1 - scrollFactor * 4.7
      }}
    >
      <div ref={mountRef}></div>
    </div>
  );
};