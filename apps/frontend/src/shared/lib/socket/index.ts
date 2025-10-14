import { io, Socket } from "socket.io-client";
import { env } from "../env";

export const socket: Socket = io(env.NEXT_PUBLIC_WS_URL, {
  autoConnect: false,
  withCredentials: true,
});
