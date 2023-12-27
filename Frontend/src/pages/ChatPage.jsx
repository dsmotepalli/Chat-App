import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../store/state";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const user = useRecoilValue(userAtom);
  

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" width="100%" height="91.5vh" padding="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div> 
  );
};

export default ChatPage;
