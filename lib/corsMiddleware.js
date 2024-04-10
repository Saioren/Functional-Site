// corsMiddleware.js

const cors = require('cors');

const corsOptions = {
  origin: 'https://www.saioren.io', // Allow requests from this origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = cors(corsOptions);
