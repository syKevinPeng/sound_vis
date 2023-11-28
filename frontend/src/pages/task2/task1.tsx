import Progress from "@/components/Progress";
import * as Plot from "@observablehq/plot";
import { useEffect, useRef, useState } from "preact/hooks";

export default () => {
  const d3Elem = useRef<HTMLDivElement>();
  const [dataCalm, setDataCalm] = useState<number[][]>();
  const [dataIntense, setDataIntense] = useState<number[][]>();

  useEffect(() => {
    console.log(dataCalm, dataIntense, d3Elem.current);

    if (dataCalm == null || dataIntense == null || d3Elem.current == null)
      return;

    const plot = Plot.plot({
      title: "Spectral Contrast Between Calm Music and Intense Music",
      // y: { grid: true },
      color: {
        scheme: "BuPu",
      },
      marks: [
        Plot.lineY(dataCalm[0], { stroke: "#e15759" }),
        Plot.lineY(dataIntense[0], { stroke: "#4e79a7" }),
      ],
    });

    plot.removeAttribute("height");
    d3Elem.current.replaceChildren(plot);
    return () => plot.remove();
  }, [dataCalm, dataIntense, d3Elem.current]);

  useEffect(() => {
    fetch("/contrast/calm")
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
      .then(setDataCalm);
    fetch("/contrast/intense")
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
      .then(setDataIntense);
  }, [setDataCalm, setDataIntense]);

  return (
    <div class="content">
      <div class="progress-div">
        <Progress progress="Task2_1" />
      </div>
      <div class="content-div">
        <p>
          Before you stands an insightful chart labeled 'Spectral Contrast,'
          which measures the difference in sound intensity across the spectrum
          of frequencies in intense and calm music. The x-axis, spanning the
          length of the chart, represents the range of frequencies captured in
          the music, from the lowest to the highest. The y-axis measures the
          spectral contrast, or how much the intensity of sound varies at
          different frequencies.
        </p>
        <div class="color-light sized-plot" ref={d3Elem} />
        <p>
          The blue spikes represent intense music. Observe their towering
          presence, reaching high above the baseline, then plummeting to graze
          it, creating a jagged skyline of peaks and valleys. This visual
          volatility mirrors the audible experience of intense music—the
          thunderous roll of drums, the piercing cry of an electric guitar, the
          soaring heights of a vocalist's range—all contributing to a sense of
          heightened energy and emotional arousal. Such music is alive with
          dynamism, capturing the full spectrum of sound and often associated
          with powerful, positive emotions such as joy or excitement, as well as
          intense, negative emotions like anger or despair.
        </p>
        <p>
          Contrasting this are the orange waves, representing calm music. Their
          presence is subtler, with a shorter reach both skyward and earthward
          from the baseline, resembling gentle rolling hills rather than rugged
          mountains. This pattern is indicative of the steady, soothing
          qualities of calm music. The gentle undulations reflect a consistent
          and uniform sound intensity, promoting a tranquil and serene
          soundscape. It's the auditory equivalent of a quiet murmur or a soft
          whisper, often associated with relaxed or subdued emotions, whether
          they be positive, like peacefulness, or negative, like melancholy.
        </p>
        <p>
          This chart serves as a visual symphony, with each color conducting its
          own emotional score. As we explore the interplay between the spectral
          spikes of intense music and the soothing curves of calm music, we gain
          a deeper appreciation of how the spectral contrast in music can paint
          a complex picture of our emotional landscape, resonating with the
          depths of our feelings and the peaks of our spirits.
        </p>
      </div>
    </div>
  );
};
