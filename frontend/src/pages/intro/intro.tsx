// import { useLocation } from "preact-iso";
import { memo } from "preact/compat";
import "./intro.css";
import Progress from "@/components/Progress";

export default memo(
  ({
    to1,
    to2,
    to3,
  }: {
    to1: () => void;
    to2: () => void;
    to3: () => void;
  }) => {
    // const location = useLocation();

    return (
      <div class="content">
        <div class="progress-div">
          <Progress progress="Intro" />
        </div>
        <div class="content-div">
          <h2>
           When we talk about music, we're speaking of an art form that dances
            on the spectrum of sound, a realm where noise and melody coalesce
            and diverge in a complex ballet of frequencies. Our research delves
            into the intricate patterns that emerge when we dissect music to its
            core, discerning the fine line where music ceases to be noise and
            transforms into an organized symphony of sound that can convey a
            spectrum of emotions and instructions.
          </h2>
          <h1>
            At the heart of our inquiry lies three pivotal tasks:
            <div class="divide-3">
              <div onClick={to1}>Music Vs. Nosie</div>
              <div onClick={to2}>Valence Vs. Arousal</div>
              <div onClick={to3}>Instrumental music</div>
            </div>
          </h1>
          <h2>
            These tasks help us to unravel the threads that compose the rich
            tapestry of music. Let us tune our instruments and prepare to delve
            into the symphony of sounds, to distinguish the noise from the
            music, and to discover the patterns that lie within.
          </h2>
        </div>
      </div>
    );
  }
);
