import { useEffect, useState } from "react";
import io from "Socket.IO-client";
let socket: any;

export const SessionCounter = () => {
  const [activeSessions, setActiveSessions] = useState(0);
  const socketInitializer = async () => {
    await fetch(process.env.API_HOST + "/socket");
    socket = io();

    socket.on("connect", () => {
      socket.emmit("update-count", activeSessions + 1);
    });

    socket.on("update-count", (num: number) => {
      setActiveSessions(num);
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return <div>Active sessions: {activeSessions}</div>;
};
