import "./styles/global.css";
import "./styles/layout.css";
import "./styles/general.css";
import {
  Contacts,
  Project,
  Header,
  Skills,
  Education,
  Footer,
  Companies,
} from "./components";

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
            <Companies />
            <Project />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
