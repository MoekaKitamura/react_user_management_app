import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { User } from "../types/api/User";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          navigate("/home");
        } else {
          alert("ユーザーが見つかりません");
        }
      })
      .catch(() => {
        alert("ログインできません");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { login, loading };
};
