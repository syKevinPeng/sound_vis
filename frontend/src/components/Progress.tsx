const allProgress = {
  Title: "Title",
  Intro: "Intro",
  Task1_0: "Task1_0",
  Task1_1: "Task1_1",
  Task1_2: "Task1_2",
  Task1_3: "Task1_3",
  Task2_0: "Task2_0",
  Task2_1: "Task2_1",
  Task2_2: "Task2_2",
  // Task2_3: "Task2_3",
  Task3_0: "Task3_0",
  Task3_1: "Task3_1",
  // Task3_2: "Task3_2",
  // Task3_3: "Task3_3",
};

export type Progress = keyof typeof allProgress;

export default ({ progress }: { progress: Progress }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Object.entries(allProgress).map(([k, v]) => (
        <div style={k == progress ? { fontSize: "xx-large" } : {}} key={k}>
          {v}
        </div>
      ))}
    </div>
  );
};
