'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function RetroComputer({ setHiddenRetroComputer, scrollFactor, setProgress }) {
  const mountRef = useRef(null);
  const controlsRef = useRef(null);
  const animationStartedRef = useRef(false);

  useEffect(() => {
    const manager = new THREE.LoadingManager();

    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const progress = Math.round((itemsLoaded / itemsTotal) * 100);
      setProgress(progress);
    };

    manager.onLoad = () => {
      setProgress(100);
    };

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Adjustment for high pixel density devices

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(1, 2.5, 5);
    const initialZoom = camera.position.z;

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1; // Improves smooth movements
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

    const loader = new GLTFLoader(manager).setPath('models/commodore/');
    loader.load('scene.gltf', (gltf) => {
      const mesh = gltf.scene;
      mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh.position.set(0, 2.05, 0);
      scene.add(mesh);
    });

    const  onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    let startTime = null;
    const delay = 2000;
    const duration = 3700;

    const animateZoom = (timestamp) => {
      if (!startTime) {
        startTime = timestamp + delay;
      }

      // const elapsedTime = timestamp - startTime;
      const elapsedTime = Math.max(0, timestamp - startTime);
      const t = Math.min(elapsedTime / duration, 1);
      const currentZoom = THREE.MathUtils.lerp(initialZoom, controls.maxDistance, t);
      camera.position.z = currentZoom;

      controls.update();
      renderer.render(scene, camera);

      if (t < 1) {
        requestAnimationFrame(animateZoom);
      } else {
        setHiddenRetroComputer(true);
        controls.enabled = true;
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      controls.enableZoom = false; // Required for scrolling with trackpad or touch devices
    }

    mountRef.current.appendChild(renderer.domElement);
    animate();

    // Start animation when the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationStartedRef.current) {
          animationStartedRef.current = true;
          controls.enabled = false; // Disable user interactions during animation
          requestAnimationFrame(animateZoom);
        }
      },
      { threshold: 0.5 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    // When the maximum zoom is raised, the focus is removed from the model and returned to the page
    // const handleScroll = (event) => {
    //   // if (camera.position.length() >= controls.maxDistance) {
    //   //   event.preventDefault();
    //   //   window.scrollBy(0, event.deltaY);
    //   //   setHiddenRetroComputer(true);
    //   // }
    //   event.stopPropagation();
    //   window.scrollBy({ top: event.deltaY, behavior: 'smooth', });
    // }

    // renderer.domElement.addEventListener('wheel', handleScroll);
    // renderer.domElement.addEventListener('touchmove', handleScroll);

    return () => {
      if (mountRef.current) observer.unobserve(mountRef.current);
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [setProgress]);

  return (
    <>
      <div
        className="fixed top-0 left-0 transition-all duration-300 ease-out"
        style={{ opacity: 1 - scrollFactor * 4.7 }}
      >
        <div ref={mountRef} />
      </div>
      <div className="h-screen" />
    </>
  );
}