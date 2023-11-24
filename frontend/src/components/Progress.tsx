import { useLocation } from "preact-iso";

const allProgress = {
  Title: { text: "Title", link: "/" },
  Intro: { text: "Intro", link: "/intro" },
  Task1_0: { text: "Task1_0", link: "/task1/overview" },
  Task1_1: { text: "Task1_1", link: "/task1/1" },
  Task1_2: { text: "Task1_2", link: "/task1/2" },
  Task1_3: { text: "Task1_3", link: "/task1/3" },
  Task2_0: { text: "Task2_0", link: "/task2/overview" },
  Task2_1: { text: "Task2_1", link: "/task2/1" },
  Task2_2: { text: "Task2_2", link: "/task2/2" },
  // Task2_3: "Task2_3",
  Task3_0: { text: "Task3_0", link: "/task3/overview" },
  Task3_1: { text: "Task3_1", link: "/task3/1" },
  // Task3_2: "Task3_2",
  // Task3_3: "Task3_3",
};

export type Progress = keyof typeof allProgress;

export default ({ progress }: { progress: Progress }) => {
  const location = useLocation();
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
      {Object.entries(allProgress).map(([k, { text, link }]) => (
        <button
          style={{
            ...(k == progress ? { fontSize: "xx-large" } : {}),
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
          }}
          key={k}
          onClick={() => location.route(link)}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
