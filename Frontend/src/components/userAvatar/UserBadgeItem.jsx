import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/state";

const UserBadgeItem = ({ user1, handleFunction, admin }) => {
  const user = useRecoilValue(userAtom);
  
  return (
    <Badge
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
      fontFamily={"Work sans"}
    >
      {user1?.name}
      {user._id === user1._id ? " (me)" : null}
      {admin === user1._id && <span> (Admin)</span>}

      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
