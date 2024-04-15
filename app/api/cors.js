export default function handler(req, res) {
  // Set CORS headers
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
  res.setHeader('Access-Control-Allow-Origin', apiUrl);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Check if the request method is OPTIONS (preflight request), if so, just send 200 OK status
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle other HTTP methods here

  // Return a response
  res.status(200).json({ message: 'CORS headers set successfully.' });
}
