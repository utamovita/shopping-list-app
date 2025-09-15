import { Test, TestingModule } from '@nestjs/testing';
import { EventsGateway } from './events.gateway';
import { Server, Socket } from 'socket.io';

describe('EventsGateway', () => {
  let gateway: EventsGateway;

  const mockEmit = jest.fn();
  const mockServer = {
    to: jest.fn().mockReturnValue({
      emit: mockEmit,
    }),
  };

  const mockSocket = {
    id: 'socket-123',
    join: jest.fn(),
    leave: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsGateway],
    }).compile();

    gateway = module.get<EventsGateway>(EventsGateway);
    gateway.server = mockServer as unknown as Server;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('handleJoinGroup', () => {
    it('should make a client join a room', async () => {
      const groupId = 'group-123';
      await gateway.handleJoinGroup(mockSocket as unknown as Socket, groupId);
      expect(mockSocket.join).toHaveBeenCalledWith(groupId);
    });
  });

  describe('handleShoppingListUpdate', () => {
    it('should emit a shopping_list_updated event to a specific room', () => {
      const groupId = 'group-123';
      gateway.handleShoppingListUpdate(groupId);

      expect(mockServer.to).toHaveBeenCalledWith(groupId);
      expect(mockEmit).toHaveBeenCalledWith('shopping_list_updated', {
        groupId,
      });
    });
  });
});
