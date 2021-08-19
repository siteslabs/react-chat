import Messages from "./Messages"
import Navbar from "./Navbar"

const Chat = () => {
  return (
    <div className=" bg-black mx-auto overflow-y-hidden">
      <div className="md:w-3/4 lg:w-2/4 chat relative">
        <Navbar />
        <Messages />
      </div>
    </div>
  )
}

export default Chat
