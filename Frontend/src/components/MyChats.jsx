import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  chatsAtom,
  fetchAgainAtom,
  selectedChatAtom,
  userAtom,
} from "../store/state";
import { Box, Button, Skeleton, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { AddIcon } from "@chakra-ui/icons";
import { getSender } from "../config/chatLogics";
import GroupChatModal from "./miscellaneous/GroupChatModal";

const MyChats = () => {
  const [selectedChat, setSelectedChat] = useRecoilState(selectedChatAtom);
  const [chats, setChats] = useRecoilState(chatsAtom);
  const user = useRecoilValue(userAtom);
  const [loggedUser, setLoggedUser] = useState();
  const fetchAgain = useRecoilValue(fetchAgainAtom);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  const fetchChats = async () => {
    setSelectedChat("");
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `https://chat-app-4fhq.onrender.com/api/chat/`,
        config
      );
      setLoading(false);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error fetching the chat from mychats",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
      console.log(error);
    }
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("user-info")));
    console.log(user);
    fetchChats();
  }, [fetchAgain]);

  return (
    <>
      <Box
        display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
        flexDirection={"column"}
        alignItems={"center"}
        p={3}
        bg="white"
        width={{ base: "100%", md: "31%" }}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Box
          pb={3}
          px={3}
          fontSize={{ base: "28px", md: "30px" }}
          fontFamily="Work sans"
          display="flex"
          w="100%"
          justifyContent={"space-between"}
          alignItems="center"
        >
          My Chats
          <GroupChatModal>
            <Button
              display="flex"
              fontSize={{ base: "17px", md: "10px", lg: "17px" }}
              rightIcon={<AddIcon />}
            >
              New Group Chat
            </Button>
          </GroupChatModal>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          p={3}
          bg="#F8F8F8"
          w="100%"
          h="100%"
          borderRadius="lg"
          overflowY="scroll"
        >
          {!loading ? (
            <Stack overflowY="hidden">
              {chats.map((chat) => (
                <Box
                  onClick={() => setSelectedChat(chat)}
                  cursor="pointer"
                  bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                  color={selectedChat === chat ? "white" : "black"}
                  px={3}
                  py={2}
                  borderRadius="lg"
                  key={chat._id}
                >
                  <Text>
                    {!chat.isGroupChat
                      ? getSender(loggedUser, chat.users)
                      : chat.chatName}
                  </Text>
                  {chat.latestMessage && (
                    <Text fontSize="xs">
                      <b>{chat.latestMessage.sender.name} : </b>
                      {chat.latestMessage.content.length > 50
                        ? chat.latestMessage.content.substring(0, 51) + "..."
                        : chat.latestMessage.content}
                    </Text>
                  )}
                </Box>
              ))}
            </Stack>
          ) : (
            <Stack>
              <Skeleton height="45px" />
              <Skeleton height="45px" />
              <Skeleton height="45px" />
              <Skeleton height="45px" />
              <Skeleton height="45px" />
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MyChats;
