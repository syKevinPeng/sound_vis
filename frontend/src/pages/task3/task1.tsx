import Progress from "@/components/Progress";
import musicImage from "@/images/piano_vis.jpg";

export default () => (
  <div class="content">
    <div class="progress-div">
      <Progress progress="Task3_1" />
    </div>
    <div class="content-div">
      <p>
      This visualization maps piano keystrokes over time,
      revealing the nuanced interaction between a pianist's touch and the resulting music.
      Each piano note is represented by a unique symbol on a graph, 
      with the horizontal axis depicting time and the vertical axis indicating note pitches from low to high.
      The variety of symbols and lines capture different aspects of piano playing:
        <ol>
          <li>
            Note Duration: Longer lines signify extended note sustain.
          </li>
          <li>
            Note Pitch: Vertical position indicates the note's pitch.
          </li>
          <li>
            Note Intensity: Symbol size reflects keystroke intensity.
          </li>
          <li>
            Chords and Harmony: Vertical alignment signifies chord creation.
          </li>
          <li>
            Melody and Rhythm: Sequence and spacing reveal music's melody and rhythm.
          </li>
          
        </ol>
        
      </p>
      <div><img src={musicImage} alt="Piano Visualization" style={{ width: "600px", height: "250px" }} /> </div>
      <p>
        From this visualization, a student or music enthusiast can gain insights
        into the technical execution of a piano piece. They can observe the
        complexity of the music, discern patterns in the pianist's playing, and
        understand how different notes are woven together to create a musical
        tapestry.Moreover, this visualization can serve as a learning tool, allowing
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
