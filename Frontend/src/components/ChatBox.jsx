import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedChatAtom, userAtom } from '../store/state';
import { Box } from '@chakra-ui/react';
import SingleChat from './SingleChat';

const ChatBox = () => {

  const [selectedChat, setSelectedChat] = useRecoilState(selectedChatAtom);
  const user = useRecoilValue(userAtom);

  return (
    <Box
      display={{base: selectedChat ? "flex":"none",md:"flex" }}
      alignItems={'center'}
      flexDirection={'column'}
      p={3}
      bg={'white'}
      w={{base:'100%',md:"68%"}}
      borderRadius={'lg'}
      borderWidth={'1px'}
      width={"100%"}
    >
      <SingleChat />
    </Box>
  )
}

export default ChatBox
