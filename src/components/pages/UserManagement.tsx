import { memo, FC, useEffect, useCallback } from "react";
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";

import { UserCard } from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/layout/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();

  // const unsplashUrl = "https://source.unsplash.com/random"
  const picsumUrl = "https://picsum.photos/800";

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl={picsumUrl}
                userName={user.username}
                fullName={user.name}
                onClick={() => onClickUser(user.id)}
              />
            </WrapItem>
          ))}
          <UserDetailModal
            user={selectedUser}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Wrap>
      )}
    </>
  );
});
