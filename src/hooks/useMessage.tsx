import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: props) => {
      const { title, status } = props;
      toast({
        title: title,
        status: status,
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );

  return { showMessage };
};
