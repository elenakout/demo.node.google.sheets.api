# Notes App - Server

This project is a demo that uses `google-sheets` as a database. It's a simple notes app which implements the basic CRUD functions. The server is built with Node and Express and the client is build with Vuejs.

## Features - MVP

- Display all notes
- Display one note by id
- Create note
- Update note by id
- Delete note by id
- Filtering `future`
- Data Validation `future`

## Data model

- Title: String [required]
- Content: String [required]
- Type: String [note/todo/feature] [required]
- CreatedAt: Date [default: now]

## API Endpoints

```js
// @desc      Get all notes
// @route     GET /api/v1/notes
// @access    Public
exports.getNotes = asyncHandler(req, res, next) => {
  // /api/v1/notes?type=todo
};

// @desc      Create note
// @route     POST /api/v1/notes
// @access    Public
exports.createNote = asyncHandler (req, res, next) => {};

// @desc      Get one note
// @route     GET /api/v1/notes/:id
// @access    Public
exports.getNote = (req, res, next) => {};

// @desc      Update note
// @route     PUT /api/v1/notes/:id
// @access    Public
exports.updateNote = async (req, res, next) => {};

// @desc      Delete note
// @route     DELETE /api/v1/notes/:id
// @access    Public
exports.deleteNote = (req, res, next) => {};

```

## Notes

 [tutorial1](https://www.youtube.com/watch?v=01YKQmia2Jw)
 [tutorial2](https://www.youtube.com/watch?v=ulOKYl5sHGk)
 [npm package](https://www.npmjs.com/package/google-spreadsheet)
 [sheet](https://docs.google.com/spreadsheets/d/1Q5WWy2UMWZZBjWa0-EnOBwGdhFhoX3X3t6cRxaTFWNY/edit#gid=0)
