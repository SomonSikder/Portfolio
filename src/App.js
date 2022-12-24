import Home from "./page/Home";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Router>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
