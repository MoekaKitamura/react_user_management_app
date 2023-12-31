import { memo, FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { StarIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home"), []);
  const onClickUserManagement = useCallback(
    () => navigate("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => navigate("/home/setting"), []);
  const { loginUser } = useLoginUser();

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
            <Link onClick={onClickSetting} ml={3}>
              設定
            </Link>
          </Box>
        </Flex>
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          {loginUser?.isAdmin ? <StarIcon mr={1} /> : ""}
          <Text fontSize="14px">
            {loginUser
              ? `${loginUser.name}としてログイン中`
              : "ログインしてください"}
          </Text>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
