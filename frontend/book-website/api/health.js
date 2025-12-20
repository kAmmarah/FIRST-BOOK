// Vercel Serverless Function for Health Check
function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

module.exports = handler;