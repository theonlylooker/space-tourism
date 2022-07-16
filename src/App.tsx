import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { useMultiFetch } from "./hooks/useMultiFetch";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import { Fetch } from "./types/type";

function App() {
  //const [data, setData] = useState();
  const URLS = [
    "http://localhost:5000/destinations",
    "http://localhost:5000/crew",
    "http://localhost:5000/technology",
  ];
  const data: Fetch = useMultiFetch(URLS);

  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Destination"
              element={<Destination data={data.data.destinations} />}
            />
            <Route path="/Crew" element={<Crew data={data.data.crew} />} />
            <Route
              path="/Technology"
              element={<Technology data={data.data.technology} />}
            />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
