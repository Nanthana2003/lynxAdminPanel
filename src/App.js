import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Club from "./pages/Clubs/Clubs";
import Feedback from "./pages/Feedback/Feedback";
import AddressBook from "./pages/AddressBook/AddressBook";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin-panel" element={<Navbar />}>
            <Route path="clubs" element={<Club />} />
            <Route path="address-book" element={<AddressBook />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
