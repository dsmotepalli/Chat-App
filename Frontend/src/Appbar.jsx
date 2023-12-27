import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "./store/state";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo) {
      
      setUser(userInfo);
      
      navigate("/chats");
    } else {
      navigate("/");    
    }
  }, []);
  return;
};

export default Appbar;
