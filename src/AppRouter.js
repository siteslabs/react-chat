import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"
import { Redirect, Route, Switch } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./utils/const"
import Loading from "./components/Loading"

const AppRouter = () => {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-900 ">
        <Loading />
      </div>
    )
  }

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to="/chat" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to="/login" />
    </Switch>
  )
}

export default AppRouter
