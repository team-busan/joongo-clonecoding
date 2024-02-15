import "./index.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
