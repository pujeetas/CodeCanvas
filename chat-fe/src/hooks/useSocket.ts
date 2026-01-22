import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

type MessageData = {
    username : string,
    text: string,
    time: string
}

type DrawData = {
    x: number,
    y: number,
    isDrawing: boolean,
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

    const receiveDraw = (callback : (coords : DrawData) => void) => {
        socketRef.current?.on("draw", callback)
    }

    const emitDraw = (data : DrawData) => {
        socketRef.current?.emit("draw", data)
    }

    return {joinChat, sendMessage, onMessage, onlineUsers , receiveDraw, emitDraw}
}