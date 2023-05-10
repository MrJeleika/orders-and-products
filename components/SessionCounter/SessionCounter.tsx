import { useEffect, useState } from "react";
import io from "socket.io-client";
let socket: any;

export const SessionCounter = () => {
  const [activeSessions, setActiveSessions] = useState(0);
  const socketInitializer = async () => {
    await fetch(`http://localhost:3000/api/socket`);
    socket = io("http://localhost:3000/api");

    socket.on("connect", () => {
      socket.emit("update-count", activeSessions + 1);
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
