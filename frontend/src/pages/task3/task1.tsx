import Progress from "@/components/Progress";

export default () => (
  <div class="content">
    <div class="progress-div">
      <Progress progress="Task3_1" />
    </div>
    <div class="content-div">
      <p>
        This visualization presents a detailed mapping of piano keystrokes over
        time, providing a window into the precise interplay between a pianist's
        touch and the resulting music. Here, we can trace the individual notes
        played on a piano, each represented by a unique symbol on a graph where
        the horizontal axis represents time and the vertical axis corresponds to
        the piano notes, with the lowest notes at the bottom and the highest at
        the top.
      </p>
      <p>
        The variety of symbols and lines capture different aspects of piano
        playing:
        <ol>
          <li>
            Note Duration: Lines extending horizontally represent the sustain of
            each note. The longer the line, the longer the note is held.
          </li>
          <li>
            Note Pitch: The vertical position of each symbol indicates the pitch
            of the note being played. Lower positions correspond to lower
            pitches (the left side of the piano keyboard), and higher positions
            correspond to higher pitches (the right side of the piano keyboard).
          </li>
          <li>
            Note Intensity: The different symbols can signify the intensity or
            velocity of the keystroke. For example, a larger symbol might
            indicate a stronger keystroke, resulting in a louder sound.
          </li>
          <li>
            Chords and Harmony: When multiple symbols align vertically, it
            indicates the simultaneous striking of multiple keys, creating
            chords that contribute to the harmonic structure of the piece.
          </li>
          <li>
            Melody and Rhythm: The sequence of notes and their timing relative
            to each other tells us about the melody and rhythm of the music.
            Regularly spaced symbols may indicate a steady rhythm, while varying
            distances can suggest changes in tempo or rhythm.
          </li>
        </ol>
      </p>
      <p>
        From this visualization, a student or music enthusiast can gain insights
        into the technical execution of a piano piece. They can observe the
        complexity of the music, discern patterns in the pianist's playing, and
        understand how different notes are woven together to create a musical
        tapestry. For instance, one could study the use of the sustain pedal by
        looking at how long notes are held, or analyze the pianist's dynamics by
        observing the variation in the symbols' size and shape.
      </p>
      <p>
        Moreover, this visualization can serve as a learning tool, allowing
        students to compare their own playing to a target performance by
        visually matching their keystrokes to those displayed. It also offers
        composers and music theorists a way to graphically represent musical
        ideas and see how different elements of a piece come together over time.
      </p>
      <p>
        Through such a detailed visual representation of piano music, we
        appreciate not only the auditory beauty of the piano but also the
        intricacy and precision involved in the artistry of playing this
        magnificent instrument.
      </p>
    </div>
  </div>
);
