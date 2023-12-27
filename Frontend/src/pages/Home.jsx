import React, { useEffect } from "react";
import { Box, Text, Container } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../store/state";

const Home = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const navigate = useNavigate();
   
    // useEffect(() => {
    //   const userInfo = JSON.parse(localStorage.getItem("user-info"));
    //   if (userInfo) {
    //     setUser(userInfo);
    //     navigate('/chats')
    //   }
    // }, []);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" color="black">
          Talk-A-Tive
        </Text>
      </Box>

      <Box
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        w="100%"
        p={4}
      >
     
          <Tabs variant="soft-rounded">
            <TabList mb="1rem">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

    </Container>
  );
};

export default Home;
