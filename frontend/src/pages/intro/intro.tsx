import { useLocation } from "preact-iso";
import "./intro.css";
import Progress from "@/components/Progress";

export default () => {
  const location = useLocation();

  return (
    <div class="content">
      <div class="progress-div">
        <Progress progress="Intro" />
      </div>
      <div class="content-div">
        <p>
          When we talk about music, we're speaking of an art form that dances on
          the spectrum of sound, a realm where noise and melody coalesce and
          diverge in a complex ballet of frequencies. Our research delves into
          the intricate patterns that emerge when we dissect music to its core,
          discerning the fine line where music ceases to be noise and transforms
          into an organized symphony of sound that can convey a spectrum of
          emotions and instructions.
        </p>
        <p>
          At the heart of our inquiry lies three pivotal tasks:
          <div class="divide-3">
            <div onClick={() => location.route("/task1/overview")}>
              Music Vs. Nosie
            </div>
            <div onClick={() => location.route("/task2/overview")}>
              Valence Vs. arousal 
            </div>
            <div onClick={() => location.route("/task3/overview")}>
              Instrumental music
            </div>
          </div>
        </p>
        <p>
          These tasks help us to unravel the threads that compose the rich
          tapestry of music. Let us tune our instruments and prepare to delve
          into the symphony of sounds, to distinguish the noise from the music,
          and to discover the patterns that lie within.
        </p>
      </div>
    </div>
  );
};
