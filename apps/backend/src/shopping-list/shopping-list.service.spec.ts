import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListService } from './shopping-list.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('ShoppingListService', () => {
  let service: ShoppingListService;

  const mockPrismaService = {
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShoppingListService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<ShoppingListService>(ShoppingListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
