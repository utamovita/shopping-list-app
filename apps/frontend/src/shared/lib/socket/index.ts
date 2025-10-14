import { io, Socket } from "socket.io-client";
import { env } from "../env";

const createSocket = (): Socket => {
  if (typeof window === "undefined") {
    return {
      on: () => {},
      emit: () => {},
      off: () => {},
    } as unknown as Socket;
  }

  const URL = env.NEXT_PUBLIC_WS_URL;

  const instance = io(URL, {
    withCredentials: true,
    transports: ["websocket"],
  });

  instance.on("connect_error", (error) => {
    console.error("[Socket.IO] Błąd połączenia:", error.message);
  });

  return instance;
};

export const socket: Socket = createSocket();
