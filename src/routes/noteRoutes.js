const express = require('express');

const {
  getAllNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote
} = require('../contollers/noteController');

const router = express.Router();

router
  .route('/')
  .get(getAllNotes)
  .post(createNote);

router
  .route('/:id')
  .get(getNote)
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
