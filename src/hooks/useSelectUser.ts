import { useCallback, useState } from "react";
import { User } from "../types/api/User";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定してモーダルを表示する
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!); // 絶対に見つかる前提の時のみ使う
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
