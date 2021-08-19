import { FaReact } from "react-icons/fa"
import { SiFirebase } from "react-icons/si"
import { auth } from "../../src/firebase"

const Navbar = () => {
  return (
    <div className="w-full items-center place-content-between flex h-10 bg-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div className="flex ml-2">
        <FaReact size={30} className=" text-blue-800 " />
        <SiFirebase size={30} className="text-yellow-600" />
      </div>
      <div>
        <button
          onClick={() => auth.signOut()}
          className="uppercase hover:text-white text-gray-200 mr-2 outline-none"
        >
          logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
