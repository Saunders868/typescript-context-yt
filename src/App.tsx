import "./App.css";
import LoggedInUser from "./components/LoggedInUser";
import Login from "./components/Login";
import UserProvider from "./context/user.context";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<LoggedInUser />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
