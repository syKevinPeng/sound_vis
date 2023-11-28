import Progress from "@/components/Progress";
import { useEffect, useRef, useState } from "preact/hooks";
import { memo } from "preact/compat";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as d3 from "d3";
import musicFile from "@/assets/csv/music.csv?url";
import noiseFile from "@/assets/csv/noise.csv?url";


export default memo(() => {

  useEffect(() => {    d3.csv(musicFile).then(function (data) {
    let all_data = [
    ];

    const total_time = data[data.length - 1].Time;
    // Format the data
    for (let i = 0; i < data.length; i++) {
        const t = +data[i].Time / total_time;
        const amplitude = +data[i].Amplitude;
        const x = Math.cos(amplitude) * 5;
        const z = Math.sin(amplitude) * 5;

        all_data.push(new THREE.Vector3(t, x, z));
    }

    const scene = new THREE.Scene();
    scene.add(new THREE.GridHelper(10, 10));
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(5, 5, 2);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(600, 400, false);
    (document.getElementById("music") || document.body).appendChild(
        renderer.domElement
    );

    // console.log(all_data);

    // ---------- ----------
    // GEOMETRY - using the setFromPoints method to create one from points_array
    // ---------- ----------
    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(all_data);
    // ---------- ----------
    // Points - using geometry with THREE.Points rather than THREE.Mesh
    // ---------- ----------
    const material = new THREE.PointsMaterial({ color: 0xffff00, size: 0.01 });
    scene.add(new THREE.Points(geometry, material));

    renderer.render(scene, camera);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 1;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;


    animate();

    function animate() {
        requestAnimationFrame(animate);

        controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

        render();
    }

    function render() {
        renderer.render(scene, camera);
    }
});}, []);

useEffect(() => {    d3.csv(noiseFile).then(function (data) {
  let all_data = [
  ];

  const total_time = data[data.length - 1].Time;
  // Format the data
  for (let i = 0; i < data.length; i++) {
      const t = +data[i].Time / total_time;
      const amplitude = +data[i].Amplitude;
      const x = Math.cos(amplitude) * 5;
      const z = Math.sin(amplitude) * 5;

      all_data.push(new THREE.Vector3(t, x, z));
  }

  const scene = new THREE.Scene();
  scene.add(new THREE.GridHelper(10, 10));
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.set(5, 5, 2);
  camera.lookAt(0, 0, 0);
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(600, 400, false);
  (document.getElementById("noise") || document.body).appendChild(
      renderer.domElement
  );

  // console.log(all_data);

  // ---------- ----------
  // GEOMETRY - using the setFromPoints method to create one from points_array
  // ---------- ----------
  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(all_data);
  // ---------- ----------
  // Points - using geometry with THREE.Points rather than THREE.Mesh
  // ---------- ----------
  const material = new THREE.PointsMaterial({ color: 0xffff00, size: 0.01 });
  scene.add(new THREE.Points(geometry, material));

  renderer.render(scene, camera);

  // orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;

  controls.screenSpacePanning = false;

  controls.minDistance = 1;
  controls.maxDistance = 500;

  controls.maxPolarAngle = Math.PI / 2;


  animate();

  function animate() {
      requestAnimationFrame(animate);

      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

      render();
  }

  function render() {
      renderer.render(scene, camera);
  }
});}, []);



  return (<div class="content">
    <div class="progress-div">
      <Progress progress="Task1_3" />
    </div>
    <div class="content-div">
      In this visualization, we delve into the realm of trigonometric mapping to
      distinguish between noise and music. By plotting the audio time series
      data on a three-dimensional graph, with time on the x-axis and the sound
      signal processed through trigonometric functions on the y and z axes, we
      can visualize the complexity and structure of sound in a form that reveals
      patterns not immediately apparent to the ear.
      <div style="display: flex; flex-direction: row">
      <div style="display: flex; flex-direction: column; margin-right: 30px">
        <div>music</div>
        <div id="music"></div>
        </div>
        <div style="display: flex; flex-direction: column">
        <div>noise</div>
        <div id="noise"></div>
        </div>
      </div>
      <h1>Music Visualization:</h1>
      The 'Music' graph presents a wild, almost erratic form, with
      dots that just unpredictable at any timestamp. This visual chaos is
      natural for complex music: a jumble of frequencies and amplitudes
      without any regularity. The scattered dots represent bursts of sound
      that do not correlate with sounds from seconds earlier, illustrating the disordered essence of
      music from a micro perspective. There's no discernible pattern or repetition in short duration, 
      mirroring the acoustic experience of complex music structure where vocals and instruments blend together.
      <h1>Noise Visualization:</h1>
      On the other side, the graph labeled 'Noise' represents the mapping in a 3D space of the
      audio data of white noise. Here, we can observe high level of consistency in each time "strip", 
      suggesting a repetitive pattern at every timestamp. These
      repeating structures reflect the equal intensity at different frequencies,
      creating the harmonious structure we associate with white noise. Despite the
      simplicity, there is an underlying order evident in the repetitions, 
      much like the frequencies across the spectrum of audible sound in equal measure.
     
      <h1>Patterns Differentiating Music from Noise:</h1>
      From these visualizations, one can discern:
      <ol>
        <li>
          **Repetition in White Noise**: In the noise graph, the echoing shapes hint
          at the repetitive nature of white noise, where certain elements are
          revisited throughout a piece, providing a sense of predictability.
        </li>
        <li>
          **Chaos in Music**: The music graph lacks such repetition, with its
          shapes not repeating or mirroring each other, highlighting the
          unpredictable nature.
        </li>
        <li>
          **Dimensionality**: Music fills the space more uniformly, with dots scattered
          suggesting the layers and dimensions of harmonics and rhythms. Noise
          fills the space scattered, lacking layered depth.
        </li>
      </ol>
    </div>
  </div>
  );
});
