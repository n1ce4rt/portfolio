import {Header} from "./Components/Header/Header";
import './App.css';
import {Home} from "./Components/Home/Home";
import {Technologies} from "./Components/Technologies/Technologies";
import {Jobs} from "./Components/MyJobs/Jobs";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {Main} from "./Components/Main/Main";

import { BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <Router>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
    </Router>
  );
}

export default App;

