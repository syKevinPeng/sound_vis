import Progress from "@/components/Progress";
import { useEffect, useRef, useState } from "preact/hooks";
import * as Plot from "@observablehq/plot";

export default () => {
  const d3ElemMusic = useRef<HTMLDivElement>();
  const [dataMusic, setDataMusic] = useState<[number, number][][]>();

  useEffect(() => {
    if (dataMusic == null || d3ElemMusic.current == null) return;

    const data_obj = dataMusic[0]
      .map((row, rowIdx) =>
        row.map((x, colIdx) => ({ x: rowIdx, y: colIdx, fill: x }))
      )
      .flat();

    const plot = Plot.plot({
      // y: { grid: true },
      color: {
        scheme: "BuPu",
      },
      marks: [
        Plot.cell(data_obj, {
          x: "x",
          y: "y",
          fill: "fill",
        }),
      ],
    });

    plot.removeAttribute("height");
    d3ElemMusic.current.replaceChildren(plot);
    return () => plot.remove();
  }, [dataMusic, d3ElemMusic.current]);

  useEffect(() => {
    fetch("/sound-feature/music")
      .then((r) => r.json())
      .catch((reason) => {
        console.error(reason);
        return [
          [
            [0, 0],
            [1, 1],
            [2, 4],
            [3, 2],
            [4, 3],
          ],
        ];
      })
      .then(setDataMusic);
  }, [setDataMusic]);


// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 




  const d3ElemNoise = useRef<HTMLDivElement>();
  const [dataNoise, setDataNoise] = useState<[number, number][][]>();

  useEffect(() => {
    if (dataNoise == null || d3ElemNoise.current == null) return;

    const data_obj = dataNoise[0]
      .map((row, rowIdx) =>
        row.map((x, colIdx) => ({ x: rowIdx, y: colIdx, fill: x }))
      )
      .flat();

    const plot = Plot.plot({
      // y: { grid: true },
      color: {
        scheme: "BuPu",
      },
      marks: [
        Plot.cell(data_obj, {
          x: "x",
          y: "y",
          fill: "fill",
        }),
      ],
    });

    plot.removeAttribute("height");
    d3ElemNoise.current.replaceChildren(plot);
    return () => plot.remove();
  }, [dataNoise, d3ElemNoise.current]);

  useEffect(() => {
    fetch("/sound-feature/noise")
      .then((r) => r.json())
      .catch((reason) => {
        console.error(reason);
        return [
          [
            [0, 0],
            [1, 1],
            [2, 4],
            [3, 2],
            [4, 3],
          ],
        ];
      })
      .then(setDataNoise);
  }, [setDataNoise]);

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


  return (
    <div class="content">
      <div class="progress-div">
        <Progress progress="Task1_2" />
      </div>
      <div class="content-div">
        <p>
          In this visualization, we are presented with one gsets of images that
          compare 'Lower Level' features of music and noise. These
          representations help us explore the complexity of sounds and how they
          can be analyzed and differentiated by levels of abstraction.
        </p>
        <div style={{ display: "flex" }}>
          <div class="color-light" style={{ flex: 1 }} ref={d3ElemMusic} />
          <div class="color-light" style={{ flex: 1 }} ref={d3ElemNoise} />
        </div>
        {/* <p>
          Lower Level Feature Comparison: We use a trained neural network to
          convert lower level music features into mosaic images. The lower level
          features can be amplitude, frequency, or other acoustic properties of
          sound that are more specific and granular to a smaller portion of the
          audio spectrum. The mosaic images are created by taking the average of
          the lower level features over time, creating a visual representation
          of the sound's acoustic properties.
        </p>
        <p>
          The mosaic representation of music has cooler colors with intermittent
          bursts of warmer hues. This suggests a level of consistency with
          occasional variations, akin to a musical composition with a steady
          rhythm and occasional accents or harmonies. In music, these features
          could represent the basic sound waves produced by an instrument or
          voice, showing variations in pitch and loudness but within a
          controlled and structured environment.
        </p>
        <p>
          The noise representation, however, appears more erratic, with an
          almost equal distribution of colors without any discernible pattern or
          order. This is indicative of the randomness of noise, where there is
          no intentional structuring of sound waves. In a noisy environment, the
          sound waves from different sources collide and combine without any
          synchronization, leading to a chaotic mix that lacks the organization
          found in music.
        </p> 
        <h1>Higher Level Feature Comparison:</h1>
        <p>
          The higher level features present a more abstract representation.
          These can be symbolic, such as score, piano roll, and onset time. They
          can also be non-symbolic like F0 trajectory, rhythm, and beats. The
          'Music' image shows a series of parallel lines, suggesting a
          repetitive pattern. In the context of music, these could represent
          more complex aspects such as melody and rhythm that repeat over time,
          creating the harmony and structure that we associate with songs or
          compositions.
        </p>
        <p>
          Conversely, the noise image, while also showing lines, presents them
          at angles, creating a less uniform appearance. This could be
          interpreted as the higher level abstraction of noise, where even if
          there are patterns, they do not align in a harmonious or predictable
          way. They could represent the variations in volume and frequency over
          time in a noisy environment, which may have some structure but not in
          the organized, rhythmic fashion of music.
        </p>
        <p>
          From these visualizations, we can observe that:
          <blockquote>
            Music tends to have both low and high-level features that exhibit
            some form of repetition and structure, whether it be in the
            consistent use of certain tones or the rhythmic patterns that define
            a piece's tempo and melody. Noise, while it may have some patterns
            at a high level, does not show the same degree of organization or
            predictability. Its features are more dispersed and less structured,
            reflecting its chaotic nature.
          </blockquote>
        </p>*/}
        <p>
          In essence, this interactive design allows us to see beyond what we
          can hear, providing a visual map to the unseen architecture of sound.
          Through this lens, we gain a deeper understanding of the complex
          layers that differentiate the ordered beauty of music from the
          disordered tapestry of noise.
        </p>
      </div>
    </div>
  );
};
