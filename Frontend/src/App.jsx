import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "./store/state";
import Appbar from "./Appbar";

function App() {
 
  return (
    <div className="App">  
      <Router>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
