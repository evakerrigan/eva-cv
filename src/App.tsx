import "./App.css";
import { Contacts, Project, Header, Skills, Education, Footer } from "./components";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
