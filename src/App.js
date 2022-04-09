import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import DestinationBody from "./pages/destination/destinationBody";
import Crew from "./pages/crew";
import Tech from "./pages/technology";
import CrewBody from "./pages/crew/crewBody";
import TechBody from "./pages/technology/technologyBody";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="destination" element={<Destination />}>
        <Route path=":index" element={<DestinationBody />} />
        <Route index element={<Navigate to="/destination/0" />} />
      </Route>
      <Route path="crew" element={<Crew />}>
        <Route path=":index" element={<CrewBody />} />
        <Route index element={<Navigate to="/crew/0" />} />
      </Route>
      <Route path="technology" element={<Tech />}>
        <Route path=":index" element={<TechBody />} />
        <Route index element={<Navigate to="/technology/0" />} />
      </Route>
    </Routes>
  );
}

export default App;
