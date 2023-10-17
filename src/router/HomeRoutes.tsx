import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/user_management",
    children: <UserManagement />
  },
  {
    path: "/setting",
    children: <Setting />
  },
]
