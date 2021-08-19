import { AiFillGoogleCircle } from "react-icons/ai"
import { provider } from "../firebase"
import firebase from "firebase"

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()

    firebase.auth().signInWithPopup(provider)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      <button
        onClick={handleLogin}
        className="capitalize  border border-gray-700 outline-none text-white hover:bg-gray-700 transition duration-300 rounded-md py-2 px-4 font-bold "
      >
        <AiFillGoogleCircle size={30} className="inline-block mr-4" /> login
        with google
      </button>
    </div>
  )
}

export default Login
