import Progress from "@/components/Progress";
import { memo } from "preact/compat";

export default memo(() => (
  <div class="content">
    <div class="progress-div">
      <Progress progress="Task2_2" />
    </div>
    <div class="content-div">
      <p>
        In this pair of chromagrams, we have a vivid graphical representation of
        how music can be dissected to reveal its harmonic and melodic DNA,
        elements central to expressing valence and arousal. These chromagrams
        categorize pitch into classes that correspond to the twelve different
        notes in the Western musical scale, from the deep rumble of the lowest
        notes to the piercing high of the top octaves.
      </p>
      <h1>Understanding Chromagrams:</h1>
      <p>
        A chromagram is a visual tool that maps the intensity of each of these
        pitch classes over time. On the horizontal axis, we have time,
        progressing from the start to the end of a piece. The vertical axis
        represents the 12 different pitch classes, with the bottom representing
        the note C, and moving up chromatically (in the order of keys on a
        piano) to B at the top. The colors range from dark to light, indicating
        the intensity or loudness of a particular pitch at a given time; the
        brighter the color, the more dominant that pitch is in the mix at that
        moment.
      </p>
      <h1>Chromagram for Intense Sound:</h1>
      <p>
        Looking at the top chromagram labeled for 'intense sound,' you'll notice
        sharp contrasts in color. Bright lines cut through the darkness
        abruptly, signifying moments where specific pitches are strikingly
        prominent. These sharp contrasts and sudden changes in intensity are
        hallmarks of music with high arousal—music that is designed to energize
        and stir the listener. The intensity of the bright lines correlates with
        the peaks in a dynamic piece of music—think of the blare of horns in a
        symphony or the sudden wail of a guitar solo. Such intense music often
        conveys high valence, whether that's the positive surge of a triumphant
        anthem or the negative charge of an angst-filled ballad.
      </p>
      <h1>Chromagram for Calm Sound:</h1>
      <p>
        Contrast this with the bottom chromagram for 'calm sound.' Here, the
        color transitions are much smoother, with less stark contrast and more
        uniformity. The persistence of a particular color suggests a pitch
        sustained over time, creating a sense of stability and continuity. This
        is characteristic of low-arousal music, which is meant to soothe and
        relax rather than excite. The melodic and harmonic elements are more
        blended and fluid, without the jarring highlights seen in the intense
        chromagram. This kind of music typically conveys a more neutral or
        negative valence, inviting introspection and calm.
      </p>
      <h1>Observations from the Chromagrams:</h1>
      <ol>
        <li>
          Intensity and Energy: The top chromagram's intense energy and
          variability in pitch intensity can make the listener's heart race,
          while the bottom chromagram's steadiness can slow the heartbeat and
          induce relaxation.
        </li>
        <li>
          Emotional Expression: Music with greater variability in pitch
          intensity (top chromagram) often aligns with emotions that are high in
          energy and can be either positive (joy, excitement) or negative
          (anger, fear). In contrast, music with less variability (bottom
          chromagram) tends to express calmer emotions, whether positive
          (contentment) or negative (sadness).
        </li>
        <li>
          Harmonic and Melodic Content: The sharp edges and defined lines in the
          intense chromagram suggest a complex harmonic and melodic content,
          indicative of musical pieces with multiple layers and textures. The
          smoother, more homogenous calm chromagram suggests simpler harmonic
          content, which is common in more ambient and textural music designed
          to be calming.
        </li>
      </ol>
      <p>
        Through these visual patterns, chromagrams provide a window into the
        emotional heart of music, showing us how melody and harmony intertwine
        to move us, to excite us, or to soothe us, and allowing even those
        without a musical background to 'see' the music in a new light.
      </p>
    </div>
  </div>
));
