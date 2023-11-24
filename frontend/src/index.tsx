import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import  Header  from "./components/Header";
import { NotFound } from "./pages/_404";
import "./style.css";
import Title from "./pages/title";
import Intro from "./pages/intro/intro";
import Task1_0 from "./pages/task1/overview";
import Task1_1 from "./pages/task1/task1";
import Task1_2 from "./pages/task1/task2";
import Task1_3 from "./pages/task1/task3";
import Task2_0 from "./pages/task2/overview";
import Task2_1 from "./pages/task2/task1";
import Task2_2 from "./pages/task2/task2"; 
import Task3_0 from "./pages/task3/overview";
import Task3_1 from "./pages/task3/task1";
// import Task3_2 from "./pages/task3/task2";
// import Task3_3 from "./pages/task3/task3";

export function App() {
  return (
    <LocationProvider>
      <Header />
      {/* <main> */}
      <Router>
        <Route path="/" component={Title} />
        <Route path="/title" component={Title} />
        <Route path="/intro" component={Intro} />
        <Route path="/task1/overview" component={Task1_0} />
        <Route path="/task1/1" component={Task1_1} />
        <Route path="/task1/2" component={Task1_2} />
        <Route path="/task1/3" component={Task1_3} />
        <Route path="/task2/overview" component={Task2_0} />
        <Route path="/task2/1" component={Task2_1} />
        <Route path="/task2/2" component={Task2_2} /> 
        <Route path="/task3/overview" component={Task3_0} />
        <Route path="/task3/1" component={Task3_1} />
        {/* <Route path="/task3/2" component={Task3_2} />
        <Route path="/task3/3" component={Task3_3} /> */}
        <Route default component={NotFound} />
      </Router>
      {/* </main> */}
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
