import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import * as styles from "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.AppFrame}>
      <Router>
        <div className={styles.Header}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className={styles.Content}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
