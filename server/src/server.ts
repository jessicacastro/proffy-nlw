import express from 'express';

// Declaring server.
const server = express();

// Server understands JSON.
server.use(express.json());

// Route for server testing.
server.get("/", (req, res) => {
  return res.json({ message: "API works!"});
});

//Starting server on port 3333.
server.listen(3333, () => {
  console.log('API started on: http://localhost:3333');
});