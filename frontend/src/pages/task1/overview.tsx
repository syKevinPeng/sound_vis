import Progress from "@/components/Progress";

import { memo } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";
import * as Plot from "@observablehq/plot";

export default memo(() => {
  const d3Elem = useRef<HTMLDivElement>();
  const [data, setData] = useState<[number, number][]>();

  useEffect(() => {
    // console.log("data", data);
    if (data == null) return;

    const plot = Plot.plot({
      y: { grid: true },
      // color: { scheme: "burd" },
      marks: [Plot.ruleY([0]), Plot.line(data, { strokeWidth :5})],
    });
    d3Elem.current.replaceChildren(plot);
    return () => plot.remove();
  }, [data, d3Elem.current]);

  useEffect(() => {
    fetch("/random/1000")
      .then((r) => r.json())
      .catch((reason) => {
        console.error(reason);
        return [
          [0, 0],
          [1, 1],
          [2, 4],
          [3, 2],
          [4, 3],
        ];
      })
      .then(setData);
  }, [setData]);

  return (
    <div class="content">
      <div class="progress-div">
        <Progress progress="Task1_0" />
      </div>
      <div class="content-div">
        <p>
          The quest to delineate music from noise is a fascinating study of
          sound and its perception. Our research endeavors to pinpoint the
          defining characteristics that separate the order and harmony of music
          from the perceived disorder of noise. This examination is rooted in
          the physics of sound waves and extends to the complex realms of
          auditory perception and cultural interpretation.
        </p>
        <p>
          Music is traditionally understood as a deliberate arrangement of
          sounds, marked by rhythm, melody, and harmony, intentionally composed
          to convey emotion and aesthetic pleasure. Noise, conversely, is often
          characterized as sound without deliberate structure, sometimes erratic
          and undesired, generally lacking the intentionality and organization
          inherent in music.
        </p>
        <div class='color-light' ref={d3Elem} />
        <p>
          Yet, the demarcation between music and noise is not absolute; it is
          influenced by individual and cultural subjectivities. The patter of
          rain may be intrusive to some, yet soothing to others. Our research
          focuses on the objective qualities of these auditory phenomena,
          exploring their acoustic properties in an effort to classify and
          understand them within a scientific and cultural framework. Through
          this investigation, we aim to refine our understanding of sound
          patterns, enhancing our ability to discern the complex structure using
          various visualization techniques.
        </p>
      </div>
    </div>
  );
});
