import { memo } from "preact/compat";
import { fpApi } from "@/index";

let sectionNum = 1;

export const allProgress = {
  Title: { text: "Music Viz", link: "/", sectionNum: sectionNum++ },
  Intro: { text: "Introduction", link: "/intro", sectionNum: sectionNum++ },
  Task1_0: {
    text: "Music vs. Noise Patterns",
    link: "/task1/overview",
    sectionNum: sectionNum++,
  },
  Task1_1: { text: "Music Vs. Noise Spectrogram", link: "/task1/1", sectionNum: sectionNum++ },
  Task1_2: { text: "Low Level Feature", link: "/task1/2", sectionNum: sectionNum++ },
  Task1_3: { text: "Spiral in Time", link: "/task1/3", sectionNum: sectionNum++ },
  Task2_0: {
    text: "Valence and Arousal",
    link: "/task2/overview",
    sectionNum: sectionNum++,
  },
  Task2_1: { text: "Spectral Contrast", link: "/task2/1", sectionNum: sectionNum++ },
  Task2_2: { text: "Chromagrams", link: "/task2/2", sectionNum: sectionNum++ },
  // Task2_3: "Task2_3",
  Task3_0: {
    text: "Physical Instruments",
    link: "/task3/overview",
    sectionNum: sectionNum++,
  },
  Task3_1: { text: "Instrumental Visualization", link: "/task3/1", sectionNum: sectionNum++, pageName:"Instrumental Visualization" },
  // Task3_2: "Task3_2",
  // Task3_3: "Task3_3",
};

export type Progress = keyof typeof allProgress;

export default memo(({ progress }: { progress: Progress }) => {
  return (
    <div
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        margin: "15vh 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.entries(allProgress).map(([k, { text, link, sectionNum }]) => (
        <div
          style={{
            ...(k == progress ? { fontSize: "xx-large" } : {}),
            cursor: "pointer",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
          key={k}
          onClick={() => fpApi.value.moveTo(sectionNum)}
        >
          {text}
        </div>
      ))}
    </div>
  );
});
