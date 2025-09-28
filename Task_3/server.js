// Task 3: REST API to manage a list of books (in-memory) using Node.js and Express

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// In-memory data store
let books = [];


function nextId() {
  return books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
}

// check 
app.get('/', (req, res) => {
  res.json({ message: 'Book API is running' });
});

// GET /books - list all books
app.get('/books', (req, res) => {
  res.status(200).json({ data: books });
});

// POST /books - create a new book
// Expected body: { "title": "string", "author": "string" }
app.post('/books', (req, res) => {
  const { title, author } = req.body || {};

  if (typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Invalid or missing "title"' });
  }
  if (typeof author !== 'string' || !author.trim()) {
    return res.status(400).json({ error: 'Invalid or missing "author"' });
  }

  const book = { id: nextId(), title: title.trim(), author: author.trim() };
  books.push(book);
  return res.status(201).json({ data: book });
});

// PUT /books/:id - update an existing book
// Accepts partial update: { "title": "...", "author": "..." }
app.put('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid "id" parameter' });
  }

  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const { title, author } = req.body || {};

  if (title !== undefined) {
    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({ error: 'Invalid "title"' });
    }
    books[index].title = title.trim();
  }

  if (author !== undefined) {
    if (typeof author !== 'string' || !author.trim()) {
      return res.status(400).json({ error: 'Invalid "author"' });
    }
    books[index].author = author.trim();
  }

  return res.status(200).json({ data: books[index] });
});

// DELETE /books/:id - delete a book
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid "id" parameter' });
  }

  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books.splice(index, 1);
  return res.status(204).send();
});

// Global error handler (safety net)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  return res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
