import { OnEvent } from '@nestjs/event-emitter';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { EVENT_NAME } from '@repo/config';
import { Server, Socket } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  private connectedClients = new Map<string, Socket>();

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.connectedClients.set(client.id, client);
    this.logStatus();
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.connectedClients.delete(client.id);
    this.logStatus();
  }

  @SubscribeMessage(EVENT_NAME.joinGroup)
  async handleJoinGroup(client: Socket, groupId: string) {
    await client.join(groupId);
    console.log(`Client ${client.id} joined group ${groupId}`);
  }

  @SubscribeMessage(EVENT_NAME.leaveGroup)
  async handleLeaveGroup(client: Socket, groupId: string) {
    await client.leave(groupId);
    console.log(`Client ${client.id} left group ${groupId}`);
  }

  @OnEvent(EVENT_NAME.shoppingListUpdated)
  handleShoppingListUpdate(groupId: string) {
    this.server.to(groupId).emit(EVENT_NAME.shoppingListUpdated, { groupId });
  }

  private logStatus() {
    console.log(
      `Total clients connected: ${String(this.connectedClients.size)}`,
    );
  }
}
