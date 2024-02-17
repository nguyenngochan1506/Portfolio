import About from "./component/About";
import Content from "./component/Content";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Content/>
      <Skills/>
      <About/>
      <Projects/>
    </div>
  );
};

export default App;
