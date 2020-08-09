import express from 'express';
import cors from 'cors';
import routes from './routes';

// Declaring server.
const server = express();

server.use(cors())

// Server understands JSON.
server.use(express.json());

server.use(routes);

// Route for server testing.
server.get("/", (req, res) => {
  return res.json({ message: "API works!"});
});

//Starting server on port 3333.
server.listen(3333, () => {
  console.log('API started on: http://localhost:3333');
});