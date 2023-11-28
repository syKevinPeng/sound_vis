import Progress from "@/components/Progress";
import { memo } from "preact/compat";
import musicImage from "@/images/Music_vis.jpg";

export default memo(() => (
  <div class="content">
    <div class="progress-div">
      <Progress progress="Task1_1" />
    </div>
    <div class="content-div">
      <p>
        This visualization demonstrates the difference in the audio-temporal
        spectrum of noise vs. music.
      </p>
      <p>
      The spectrogram is a graphic representation of sound,showing time on the horizontal axis and pitch on the vertical axis.
      Bright colors signify greater intensity, highlighting stable tones and notes.In the 100-1000 Hz range, we observe distinct patterns, typical of music and voice.This visual structure captures the organized essence of sound, shaping our perception of music and structured vocal expression.
      </p>
      <p>
      The noisy audio spectrogram presents a stark contrast, lacking distinct lines and patterns. The uniform color spread signifies energy across various frequencies without the structured repetition seen in a voice spectrogram. It resembles a crowded room, where multiple conversations blend into a continuous hum, unlike the clarity of a soloist's distinguishable notes.
      The sporadic red dots in the noisy spectrogram signify loud, abrupt noises, standing out as momentary disruptions in the ambient sound. These visualizations reveal distinct patterns distinguishing music from noise:
      </p>
      <ol>
        <li>Structure: Music shows patterns, like the lines in the voice spectrogram, while noise does not.</li>
        <li>Repetition: Music often has repeating elements, indicative of rhythm or melody, which are absent in noise.</li>
        <li>Stability: The stable presence of certain frequencies in music contrasts with the erratic frequencies in noise.</li>
        <li>Intensity Variations: In music, some frequencies will be more prominent (brighter colors), aligning with the musical composition's dynamics.</li>
      </ol>
      <p>
        By observing these characteristics, we can easily identify structured
        music and the chaotic noise. This understanding not only enriches our
        auditory experiences but also has practical applications, like noise
        cancellation, audio filtering, and sound design, where separating music
        from noise is essential.
      </p>
      <div>
        <img src={musicImage} alt="Music Visualization" style={{ width: "800px", height: "300px" }} />
      </div>
    </div>
  </div>
));
