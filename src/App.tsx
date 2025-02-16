import "./App.css";
import { Contacts, Project, Header, Skills, Education } from "./components";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="app-wrapper">
          <div className="left-block">
            <Skills />
            <Contacts />
            <Education />
          </div>
          <div className="right-block">
            <Project />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
