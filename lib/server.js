const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const cors = require('cors'); // Import CORS middleware

app.use(cors({
  origin: ['https://saioren.io', 'https://www.saioren.io']
}));

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // Apply CORS middleware
    const corsMiddleware = cors();
    corsMiddleware(req, res, () => {
      // Next.js request handling
      handle(req, res, parsedUrl);300
    });
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
