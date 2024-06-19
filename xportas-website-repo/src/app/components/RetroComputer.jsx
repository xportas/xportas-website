'use client';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { useEffect } from 'react';


// export default function RetroComputer() {

//   useEffect(() => {

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.outputColorSpace = THREE.SRGBColorSpace;


//     renderer.setSize(window.innerWidth, window.innerHeight); // tamaño del render ocupa toda la pantalla
//     // renderer.setClearColor(0x000000, 0); // color de fondo negro
//     renderer.setPixelRatio(window.devicePixelRatio); // adapta la densidad de píxeles según la pantalla donde se visualiza


//     // habilita el mapeo de sombras y selecciona el tipo de sombra suave
//     // renderer.shadowMap.enabled = true;
//     // renderer.shadowMap.type = THREE.PCFSoftShadowMap;


//     // agrega al DOM el canvas
//     document.body.appendChild(renderer.domElement);


//     const scene = new THREE.Scene(); // inicializa la escena


//     // Crea una cámara de perspectiva con un campo de visión de 45 grados, una relación de aspecto basada en el tamaño de la ventana, y establece su posición.
//     const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.set(4, 5, 11);


//     // Crea controles de órbita para la cámara, habilita el damping para una rotación suave, deshabilita el paneo y establece límites para la distancia y los ángulos de la cámara. También establece el objetivo de la cámara y actualiza los controles.
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.enablePan = false;
//     controls.minDistance = 5;
//     controls.maxDistance = 20;
//     controls.minPolarAngle = 0.5;
//     controls.maxPolarAngle = 1.5;
//     controls.autoRotate = false;
//     controls.target = new THREE.Vector3(0, 1, 0);
//     controls.update();


//     // Crea un plano que representa el suelo con geometría y material estándar, lo rota para que sea horizontal, y lo añade a la escena. El suelo no proyecta sombras pero sí las recibe.
//     // const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
//     // groundGeometry.rotateX(-Math.PI / 2);
//     // const groundMaterial = new THREE.MeshStandardMaterial({
//     //   color: 0x555555,
//     //   side: THREE.DoubleSide,
//     //   transparent: true,
//     //   opacity: 0  
//     // });
//     // const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
//     // groundMesh.castShadow = false;
//     // groundMesh.receiveShadow = true;
//     // scene.add(groundMesh);


//     // Crea una luz de tipo spot con una alta intensidad, posicionada en altura. La luz proyecta sombras y se añade a la escena.
//     const spotLight = new THREE.SpotLight(0xffffff, 3000, 0, 1, 2);
//     spotLight.position.set(10, 15, 15);
//     spotLight.castShadow = true;
//     // spotLight.shadow.bias = -0.0001;
//     scene.add(spotLight);


//     // Renderiza el modelo 3D
//     const loader = new GLTFLoader().setPath('models/commodore/');
//     loader.load('scene.gltf', (gltf) => {
//       const mesh = gltf.scene;

//       mesh.traverse((child) => {
//         if (child.isMesh) {
//           child.castShadow = true;
//           child.receiveShadow = true;
//         }
//       });

//       mesh.position.set(0, 1.05, -1);
//       scene.add(mesh);

//       document.getElementById('progress-container').style.display = 'none';
//     }, (xhr) => {
//       console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
//     }, (error) => {
//       console.error(error);
//     });


//     // Añade un listener para manejar los cambios de tamaño de la ventana. Actualiza la relación de aspecto de la cámara y el tamaño del renderer cuando la ventana cambia de tamaño.
//     window.addEventListener('resize', () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });


//     // Define una función de animación que se llama recursivamente usando requestAnimationFrame. Actualiza los controles y renderiza la escena desde la perspectiva de la cámara en cada frame. Llama a la función de animación para iniciar el bucle de renderizado.
//     function animate() {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     }

//     animate();

//   }, []);



//   return (
//     <>
//       <div id="progress-container">
//         <div id="progress">Engaging Hyperdrive...</div>
//       </div>

//       {/* <script type="module" src="./main.js"></script> */}
//     </>
//   );
// }














import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RetroComputer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, controls;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputEncoding = THREE.sRGBEncoding;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(4, 5, 11);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.update();

    // Lights
    const spotLight = new THREE.SpotLight(0xffffff, 3000, 0, 1, 2);
    spotLight.position.set(10, 15, 15);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Model Loader
    const loader = new GLTFLoader();
    loader.load('models/commodore/scene.gltf', (gltf) => {
      const mesh = gltf.scene;
      mesh.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      mesh.position.set(0, 1.05, -1);
      scene.add(mesh);

      // Hide progress container
      const progressContainer = document.getElementById('progress-container');
      if (progressContainer) {
        progressContainer.style.display = 'none';
      }
    }, undefined, (error) => {
      console.error(error);
    });

    // Mount renderer to canvas
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div ref={canvasRef} />
  );
};

export default RetroComputer;
