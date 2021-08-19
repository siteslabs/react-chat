import Login from "../components/Login"
import Chat from "../components/Chat"

export const privateRoutes = [
  {
    path: "/chat",
    Component: Chat,
  },
]

export const publicRoutes = [
  {
    path: "/login",
    Component: Login,
  },
]
