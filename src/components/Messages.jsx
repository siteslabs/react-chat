import { useState } from "react"
import { useRef } from "react"

import { useCollectionData } from "react-firebase-hooks/firestore"
import { firestore } from "../../src/firebase"
import { auth } from "../../src/firebase"
import firebase from "firebase"

import Loading from "./Loading"

import { FaTelegramPlane } from "react-icons/fa"

const Messages = () => {
  const [newMessage, setNewMessage] = useState("")
  const scroll = useRef(null)
  const messageRef = firestore.collection("messages")
  const [messages, loading] = useCollectionData(messageRef.orderBy("createdAt"))

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { uid, photoURL, displayName } = auth.currentUser

    if (newMessage) {
      await firestore.collection("messages").add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        text: newMessage,
        uid,
        photoURL,
        displayName,
      })
      scroll.current.scrollIntoView({ behavior: "smooth" })

      setNewMessage("")
    }
  }

  if (loading) {
    return (
      <div className="flex h-4/5  ">
        <Loading />
      </div>
    )
  }

  return (
    <>
      <div className="overflow-y-scroll scrollbar-hide h-4/5">
        {messages &&
          messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
        <div ref={scroll} className="h-1/4" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-8 h-28 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm absolute bottom-0  w-full"
      >
        <input
          className="rounded-full px-4 py-3 flex-1 outline-none"
          type="text"
          placeholder="New Message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="rounded-full text-white bg-gray-700 p-3  outline-none ml-2 ">
          <FaTelegramPlane size={20} />
        </button>
      </form>
    </>
  )
}

const ChatMessage = ({ uid, text, photoURL, displayName }) => {
  const isCurrentUser = uid === auth.currentUser.uid
  return (
    <div
      className={`flex text-white items-center m-4 ${
        isCurrentUser && "justify-end"
      }`}
    >
      <img
        className={`rounded-full w-8 ${isCurrentUser && "order-2 ml-4"}`}
        src={photoURL}
        alt=""
      />
      <span
        className={`ml-2 ${
          isCurrentUser ? "bg-chat-light" : "bg-chat-dark"
        } rounded-full py-2 px-4`}
      >
        <p className={`text-sm text-blue-${isCurrentUser ? "900" : "400"}`}>
          {displayName}
        </p>
        {text}
      </span>
    </div>
  )
}

export default Messages
