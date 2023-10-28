import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from '../../controllers/admin/admin.controller';
import { AdminService } from '../../services';

// Test Cases for this segment
describe('AdminController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const adminController = app.get(AdminController);
      expect(adminController.getHello()).toBe('Hello World!');
    });
  });
});
