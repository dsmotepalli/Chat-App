import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "./store/state";
import Appbar from "./Appbar";
import { Badge, Tag } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </Router>
      <Tag
        position={"absolute"}
        bottom={"12px"}
        left={"12px"}
        colorScheme="blue"
        size="lg"
        borderRadius="full"
        fontFamily={"Work sans"}
        fontSize={16}
        
        fontWeight={'bold'}
      >
        Made by&nbsp;
        <a
          href="https://github.com/dsmotepalli"
          style={{ textDecoration: "underline" }}
          target="_blank"
        >
          Deepak
        </a>
      </Tag>
    </div>
  );
}

export default App;
