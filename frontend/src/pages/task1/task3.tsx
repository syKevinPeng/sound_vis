import Progress from "@/components/Progress";

export default () => (
  <div class="content">
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
