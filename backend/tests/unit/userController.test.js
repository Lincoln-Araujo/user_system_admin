const userController = require('../../src/controllers/userController');
const User = require('../../src/models/userModel');

jest.mock('../../src/models/userModel');

describe('User Controller', () => {
    describe('listAllUsers', () => {
        it('should return all users', async () => {
            const mockUsers = [{ name: 'John Doe', email: 'john@example.com', password: 'password123' }];
            User.find.mockResolvedValue(mockUsers);

            const req = {};
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            await userController.listAllUsers(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockUsers);
        });
    });

    // Add more unit tests for other controller methods
});