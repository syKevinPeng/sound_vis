import Progress from "@/components/Progress";

export default () => (
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
        The spectrogram is a visual representation of sound where time is
        displayed on the horizontal axis, and frequency (pitch) is on the
        vertical axis. The colors represent the intensity or loudness of the
        sound at each frequency and point in time; brighter colors mean more
        energy at that frequency at that moment. In this spectrogram, we observe
        shallow horizontal lines and patterns that indicate the presence of
        tones or notes, which are stable frequencies over time. We also see a
        higher intensity in the 100-1000 Hz range, which represents the more
        discernable tones or notes that are more sensible for human auditory
        perception. This structure is characteristic of music or voice, where
        specific notes are hit and held, creating a pattern that can be followed
        and anticipated. These patterns represent the order within sound, the
        underpinning of what we perceive as music or structured vocalization.
      </p>
      <p>TODO: explain more when zoomed in</p>
      <p>
        Contrast this with the noisy audio spectrogram. Here we see a very
        different story. Instead of lines and patterns, there is a more
        homogenous spread of color. This indicates that there is energy at many
        frequencies without the clear structure or repetition we see in the
        voice spectrogram. This is what we perceive as noisy sound with no
        discernible pattern or predictability. It's akin to a crowded room where
        multiple conversations meld into a constant hum, versus a soloist whose
        every note can be distinguished.
      </p>
      <p>
        In the noisy spectrogram, note the sporadic red dots labeled as 'Noise.'
        These dots are likely instances of particularly loud, abrupt noises that
        stand out from the ambient sound. These are momentary disruptions that
        punctuate the noise.
      </p>
      <p>
        From these visualizations, we can deduce several patterns that
        distinguish music from noise:
        <ol>
          <li>
            1. Structure: Music shows patterns, like the lines in the voice
            spectrogram, while noise does not.
          </li>
          <li>
            2. Repetition: Music often has repeating elements, indicative of
            rhythm or melody, which are absent in noise.
          </li>
          <li>
            3. Stability: The stable presence of certain frequencies in music
            contrasts with the erratic frequencies in noise.
          </li>
          <li>
            4. Intensity Variations: In music, some frequencies will be more
            prominent (brighter colors), aligning with the musical composition's
            dynamics.
          </li>
        </ol>
      </p>
      <p>
        By observing these characteristics, we can easily identify structured
        music and the chaotic noise. This understanding not only enriches our
        auditory experiences but also has practical applications, like noise
        cancellation, audio filtering, and sound design, where separating music
        from noise is essential.
      </p>
    </div>
  </div>
);
