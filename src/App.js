// import './App.css';
// import Homepage from './Pages/Homepage';

// function App() {
//   return (
//     <div className="App">
//       <Homepage/>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />

      <Route
        path="/blog/:slug"
        element={<BlogDetails />}
      />
    </Routes>
  );
}

export default App;