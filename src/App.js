import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Description from "./pages/Description";
import NotFound from "./components/NotFound";
import localForage from "localforage";

localForage.config();

function App() {
  return (
    <div className="App bg-slate-50 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/user/:id" element={<Description />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
