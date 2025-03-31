import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import './Home.scss';

export default function Home() {
  const heroRef = useRef();

  useEffect(() => {
    // Three.js 3D Background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    heroRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // GSAP Animations
    gsap.from(".hero-text h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-text p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-text">
        <h1>Siddharth Singh Nathawat</h1>
        <p>Full-Stack Developer | BTech '27 | MERN | Python | Java</p>
      </div>
    </section>
  );
}
