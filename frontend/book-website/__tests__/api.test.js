// Test for Vercel API functions
const { createMocks } = require('node-mocks-http');
const healthHandler = require('../api/health');

describe('API Tests', () => {
  test('Health check endpoint returns correct status', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await healthHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toHaveProperty('status', 'healthy');
  });

  test('Health check rejects non-GET methods', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    await healthHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});