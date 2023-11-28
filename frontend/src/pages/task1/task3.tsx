import Progress from "@/components/Progress";
import { useEffect, useRef, useState } from "preact/hooks";
import { memo } from "preact/compat";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as d3 from "d3";
import musicFile from "@/assets/csv/music.csv";
import noiseFile from "@/assets/csv/noise.csv";


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

    console.log(all_data);

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

  console.log(all_data);

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
      <h1>Noise Visualization:</h1>
      The graph labeled 'Noise' presents a wild, almost erratic form, with
      spikes that jut out unpredictably in all directions. This visual chaos is
      emblematic of noise's nature: a jumble of frequencies and amplitudes
      without any regularity or rhythm. The spikes represent bursts of sound
      that do not correlate over time, illustrating the disordered essence of
      noise. There's no discernible pattern or repetition, mirroring the
      acoustic experience of noise—where the sound is random, and no specific
      frequency or rhythm dominates.
      <h1>Music Visualization:</h1>
      On the other side, the 'Music' graph shows a form that is also complex but
      less chaotic. Here, we can observe protrusions that seem to echo each
      other, suggesting a pattern or motif that repeats over time. These
      repeating structures reflect the rhythmic and melodic elements of music,
      where certain notes or sequences recur at regular intervals, creating the
      harmonious structure we associate with musical compositions. Despite the
      complexity, there is an underlying order evident in the repetition and
      symmetry of the protrusions, much like the repeating chorus or verse in a
      song.
      <h1>Patterns Differentiating Music from Noise:</h1>
      From these visualizations, one can discern:
      <ol>
        <li>
          **Repetition in Music**: In the music graph, the echoing shapes hint
          at the repetitive nature of music, where certain elements are
          revisited throughout a piece, providing a sense of order and
          predictability.
        </li>
        <li>
          **Chaos in Noise**: The noise graph lacks such repetition, with its
          shapes not repeating or mirroring each other, highlighting the
          unpredictable nature of noise.
        </li>
        <li>
          **Complexity and Structure**: While both graphs exhibit complex forms,
          music's complexity has a structure—it's a complex order. Noise, on the
          other hand, displays complex disorder.
        </li>
        <li>
          **Dimensionality**: Music fills the space with a patterned growth,
          suggesting the layers and dimensions of harmonics and rhythms. Noise
          fills the space more uniformly, lacking layered depth.
        </li>
      </ol>
      TODO: In this interactive design, users could rotate the graphs, zoom in
      and out, and perhaps even watch the shapes evolve over time with a
      playback feature.
    </div>
  </div>
  );
});
