import { memo, FC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo(({ onOpen }) => {
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    ></IconButton>
  );
});
