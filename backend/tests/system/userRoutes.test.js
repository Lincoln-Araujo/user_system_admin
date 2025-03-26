const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { app, server } = require('../../src/server');
const { disconnectDB } = require('../../src/config/db');
const User = require('../../src/models/userModel');

let mongoServer;

beforeAll(async () => {
  jest.setTimeout(20000);

  if (mongoose.connection.readyState) {
    await mongoose.disconnect();
  }

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  process.env.MONGO_URI = uri; // 🔥 Força os testes a usarem MongoMemoryServer

  await mongoose.connect(uri);
},20000);

afterAll(async () => {

  await mongoose.disconnect();


  await mongoServer.stop();

  server.close();
},20000);

beforeEach(async () => {

  await User.deleteMany({});
});

describe('User Routes', () => {
  it('should list all users', async () => {

    const testUser = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
    await User.create(testUser);


    const res = await request(app).get('/api/users');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(testUser)]));
  });

  // Add more system tests for other routes
});