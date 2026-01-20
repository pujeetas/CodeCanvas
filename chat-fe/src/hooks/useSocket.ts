import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

type MessageData = {
    username : string,
    text: string,
    time: string
}

export function useSocket  (){

    const socketRef = useRef<Socket | null>(null)

    useEffect(() => {
        socketRef.current = io("http://localhost:3000");
        return()=>{
            socketRef.current?.disconnect();
        }
    },[])

    const joinChat = (username : string) =>{
        socketRef.current?.emit("join", username);
        
    }

    const sendMessage = (message : string) => {
        socketRef.current?.emit("message", message)
    }

    const onMessage = (callback : (data : MessageData) => void) => {
        socketRef.current?.on("message", callback)
    }

    const onlineUsers = (callback : (count : number) => void) => {

        socketRef.current?.on("online-count", callback);
    }

    return {joinChat, sendMessage, onMessage, onlineUsers}
}