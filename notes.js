// notes.js

const express = require('express');
const router = express.Router();

let notes = [
    { id: 1, title: 'Note 1', content: 'Content of Note 1' },
    { id: 2, title: 'Note 2', content: 'Content of Note 2' }
];

// Rota para obter todas as notas
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Rota para adicionar uma nova nota
router.post('/notes', (req, res) => {
    const newNote = { id: notes.length + 1, title: req.body.title, content: req.body.content };
    notes.push(newNote);
    res.status(201).json(newNote);
});

// Rota para deletar uma nota por ID
router.delete('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id);
    notes = notes.filter(note => note.id !== noteId);
    res.status(204).send();
});

module.exports = router;
